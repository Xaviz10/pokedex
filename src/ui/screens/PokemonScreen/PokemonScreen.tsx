import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ActivityIndicator, Image, View } from "react-native";
import { ArrowBack, HeightIcon, WeightIcon } from "../../assets";
import { BadgeType, ProgressBar } from "../../components";
import { RootTabParamList } from "../../navigation";
import { usePokemonViewModel } from "../../viewModels";
import {
  StyledBadgesTypeContainer,
  StyledButton,
  StyledCharacteristic,
  StyledCharacteristicsTitle,
  StyledCharacteristicText,
  StyledCharacteristicValue,
  StyledContainerLogo,
  StyledFlavorText,
  StyledId,
  StyledImagePokemon,
  StyledInnerContainer,
  StyledLogo,
  StyledMainCharacteristics,
  StyledName,
  StyledPokemonScreen,
  StyledPokemonScreenActivityIndicator,
  StyledStats,
  StyledStatsContainer,
  StyledStatsTitle,
  StyledStatValue,
  StyledTitle,
  StyledVerticalLine,
  StyledVerticalLineStats,
} from "./PokemonScreen.styles";

type PokemonScreenProps = NativeStackScreenProps<RootTabParamList, "Pokemon">;

export function PokemonScreen({ route, navigation }: PokemonScreenProps) {
  const { pokemon } = usePokemonViewModel(route.params.id);
  return (
    <StyledPokemonScreen backgroundColorType={pokemon?.types[0].type}>
      {pokemon ? (
        <>
          <StyledContainerLogo>
            <StyledButton onPress={() => navigation.goBack()}>
              <ArrowBack />
              <StyledName>{pokemon.name}</StyledName>
            </StyledButton>
            <StyledLogo
              source={require("../../assets/images/pokeballWaterMark.png")}
            />
            <StyledId>#{`${pokemon.id}`.padStart(3, "0")}</StyledId>
          </StyledContainerLogo>
          <StyledInnerContainer>
            <StyledImagePokemon source={{ uri: pokemon.image }} />
            <StyledBadgesTypeContainer>
              {pokemon.types.map((currentType, index) => (
                <BadgeType
                  key={`${currentType.type.name}-${index}`}
                  backgroundColorType={currentType.type}
                />
              ))}
            </StyledBadgesTypeContainer>
            <StyledTitle colorType={pokemon?.types[0].type}>About</StyledTitle>
            <StyledMainCharacteristics>
              <StyledCharacteristic>
                <StyledCharacteristicValue>
                  <WeightIcon />
                  <StyledCharacteristicText>
                    {pokemon.weight} kg
                  </StyledCharacteristicText>
                </StyledCharacteristicValue>
                <StyledCharacteristicsTitle>Weight</StyledCharacteristicsTitle>
              </StyledCharacteristic>

              <StyledVerticalLine />

              <StyledCharacteristic>
                <StyledCharacteristicValue>
                  <HeightIcon />
                  <StyledCharacteristicText>
                    {pokemon.height / 10.0} m
                  </StyledCharacteristicText>
                </StyledCharacteristicValue>
                <StyledCharacteristicsTitle>Height</StyledCharacteristicsTitle>
              </StyledCharacteristic>

              <StyledVerticalLine />

              <StyledCharacteristic>
                {pokemon.moves[0].move.name && (
                  <StyledCharacteristicText>
                    {pokemon.moves[0].move.name}
                  </StyledCharacteristicText>
                )}
                {pokemon.moves[1].move.name && (
                  <StyledCharacteristicText>
                    {pokemon.moves[1].move.name}
                  </StyledCharacteristicText>
                )}
                <StyledCharacteristicsTitle>Moves</StyledCharacteristicsTitle>
              </StyledCharacteristic>
            </StyledMainCharacteristics>
            <StyledFlavorText>
              {pokemon.flavorTextEntries[0].flavor_text.replace(
                /(\f\n|\n|\f)/gm,
                " "
              )}
            </StyledFlavorText>
            <StyledTitle colorType={pokemon?.types[0].type}>
              Base Stats
            </StyledTitle>
            <StyledStatsContainer>
              <StyledStats>
                <StyledStatsTitle colorType={pokemon?.types[0].type}>
                  HP
                </StyledStatsTitle>
                <StyledVerticalLineStats />
                <StyledStatValue>
                  {`${pokemon.stats[0].base_stat}`.padStart(3, "0")}
                </StyledStatValue>
                <ProgressBar
                  color={pokemon?.types[0].type}
                  progress={pokemon.stats[0].base_stat}
                />
              </StyledStats>
              <StyledStats>
                <StyledStatsTitle colorType={pokemon?.types[0].type}>
                  ATK
                </StyledStatsTitle>
                <StyledVerticalLineStats />
                <StyledStatValue>
                  {`${pokemon.stats[1].base_stat}`.padStart(3, "0")}
                </StyledStatValue>
                <ProgressBar
                  color={pokemon?.types[0].type}
                  progress={pokemon.stats[1].base_stat}
                />
              </StyledStats>
              <StyledStats>
                <StyledStatsTitle colorType={pokemon?.types[0].type}>
                  DEF
                </StyledStatsTitle>
                <StyledVerticalLineStats />
                <StyledStatValue>
                  {`${pokemon.stats[2].base_stat}`.padStart(3, "0")}
                </StyledStatValue>
                <ProgressBar
                  color={pokemon?.types[0].type}
                  progress={pokemon.stats[2].base_stat}
                />
              </StyledStats>
              <StyledStats>
                <StyledStatsTitle colorType={pokemon?.types[0].type}>
                  SATK
                </StyledStatsTitle>
                <StyledVerticalLineStats />
                <StyledStatValue>
                  {`${pokemon.stats[3].base_stat}`.padStart(3, "0")}
                </StyledStatValue>
                <ProgressBar
                  color={pokemon?.types[0].type}
                  progress={pokemon.stats[3].base_stat}
                />
              </StyledStats>
              <StyledStats>
                <StyledStatsTitle colorType={pokemon?.types[0].type}>
                  SDEF
                </StyledStatsTitle>
                <StyledVerticalLineStats />
                <StyledStatValue>
                  {`${pokemon.stats[4].base_stat}`.padStart(3, "0")}
                </StyledStatValue>
                <ProgressBar
                  color={pokemon?.types[0].type}
                  progress={pokemon.stats[4].base_stat}
                />
              </StyledStats>
              <StyledStats>
                <StyledStatsTitle colorType={pokemon?.types[0].type}>
                  SPD
                </StyledStatsTitle>
                <StyledVerticalLineStats />
                <StyledStatValue>
                  {`${pokemon.stats[5].base_stat}`.padStart(3, "0")}
                </StyledStatValue>
                <ProgressBar
                  color={pokemon?.types[0].type}
                  progress={pokemon.stats[5].base_stat}
                />
              </StyledStats>
            </StyledStatsContainer>
          </StyledInnerContainer>
        </>
      ) : (
        <StyledPokemonScreenActivityIndicator>
          <ActivityIndicator
            size={"large"}
            style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
            color={"red"}
          />
        </StyledPokemonScreenActivityIndicator>
      )}
    </StyledPokemonScreen>
  );
}
