import {useQuery} from '@tanstack/react-query';
import {Dimensions, FlatList, StyleSheet, View, ViewToken} from 'react-native';
import {getMatches} from 'services/match';
import style from 'styles/style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PicksChip from './PicksChip';
import PicksCard from './PicksCard';
import {useRef, useState} from 'react';
import {Match} from 'types/match';

const {height: wHeight} = Dimensions.get('window');
const snapToInterval = wHeight - 80;

type Selection = {
  matchId: string;
  teamId: string;
};

const PicksScreen = () => {
  const insets = useSafeAreaInsets();
  const [matchIndex, setMatchIndex] = useState<number>(0);
  const [selections, setSelections] = useState<Selection[]>([]);

  const onViewRef = useRef(
    ({viewableItems}: {viewableItems: ViewToken<Match>[]}) => {
      if (viewableItems.length > 0) {
        const visibleItem = viewableItems[0];
        if (visibleItem.index !== null) {
          setMatchIndex(visibleItem.index);
        }
        console.log('Visible index:', visibleItem.index);
        console.log('Visible item ID (from keyExtractor):', visibleItem.key);
      }
    },
  );

  const week = 18;
  const matchesQuery = useQuery({
    queryKey: ['matches', week],
    queryFn: () => getMatches(week),
  });

  const onChangeSelection = (match: Match, team: 'home_team' | 'away_team') => {
    const _selections = [...selections];
    const index = _selections.findIndex(
      item => item.matchId === match.match_id,
    );

    if (index === -1) {
      _selections.push({
        matchId: match.match_id,
        teamId: match[team].id,
      });
    } else {
      _selections[index].teamId = match[team].id;
    }

    setSelections(_selections);
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <FlatList
        data={matchesQuery.data?.matches || []}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <PicksChip
            homeTeam={{
              abbreviation: item.home_team.abbreviation,
              color: item.home_team.color,
              secondaryColor: item.home_team.secondary_color,
              isSelected:
                selections.find(s => s.teamId === item.home_team.id) !==
                undefined,
              hasSelection:
                selections.find(s => s.matchId === item.match_id) !== undefined,
            }}
            awayTeam={{
              abbreviation: item.away_team.abbreviation,
              color: item.away_team.color,
              secondaryColor: item.away_team.secondary_color,
              isSelected:
                selections.find(s => s.teamId === item.away_team.id) !==
                undefined,
              hasSelection:
                selections.find(s => s.matchId === item.match_id) !== undefined,
            }}
            isFocus={matchIndex === index}
          />
        )}
        contentContainerStyle={style.gap8}
        style={styles.flatList}
      />
      <FlatList
        data={matchesQuery.data?.matches || []}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PicksCard
            homeTeam={{
              abbreviation: item.home_team.abbreviation,
              color: item.home_team.color,
              secondaryColor: item.home_team.secondary_color,
              isSelected:
                selections.find(s => s.teamId === item.home_team.id) !==
                undefined,
              onPress: () => onChangeSelection(item, 'home_team'),
            }}
            awayTeam={{
              abbreviation: item.away_team.abbreviation,
              color: item.away_team.color,
              secondaryColor: item.away_team.secondary_color,
              isSelected:
                selections.find(s => s.teamId === item.away_team.id) !==
                undefined,
              onPress: () => onChangeSelection(item, 'away_team'),
            }}
          />
        )}
        snapToInterval={snapToInterval}
        decelerationRate="fast"
        snapToAlignment="start"
        contentContainerStyle={style.gap8}
        onViewableItemsChanged={onViewRef.current}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F3F1',
    flexDirection: 'row',
    gap: 10,
  },
  flatList: {
    flex: 1,
  },
});

export default PicksScreen;
