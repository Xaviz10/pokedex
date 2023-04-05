import { useEffect, useState } from "react";
import { useCasesPokemons } from "../../../domain/useCases";
import { pokemonsDataService } from "../../../data/dataServices";
import { PokemonCompleteDataEntity } from "../../../domain/entities";
import { PokemonCompleteModel } from "../../../data/models";
import { useAuth, usePromises } from "../../hooks";
import { useNavigation } from "@react-navigation/native";
import {
  StyledButton,
  StyledId,
  StyledName,
} from "../../screens/PokemonScreen/PokemonScreen.styles";
import { ArrowBack } from "../../assets";

export function usePokemonViewModel(id: number) {
  const { getPokemonData } = useCasesPokemons(pokemonsDataService());
  const { setOptions, goBack } = useNavigation();
  const { promiseInProgressArea: promiseGetPokemonsPromise } =
    usePromises("getPokemonsPromise");
  const { auth } = useAuth();

  const [pokemon, setPokemon] = useState<PokemonCompleteDataEntity>();

  function handlePokemonDataSuccess(pokemonData: PokemonCompleteModel) {
    const pokemonCompleteDateFormatted = {
      id: pokemonData.id,
      name: pokemonData.name,
      types: pokemonData.types,
      order: pokemonData.order,
      moves: pokemonData.moves,
      image: pokemonData.sprites.other["official-artwork"].front_default,
      weight: pokemonData.weight,
      height: pokemonData.height,
      flavorTextEntries: pokemonData.flavor_text_entries,
      stats: pokemonData.stats,
    };

    setPokemon(pokemonCompleteDateFormatted);
    setOptions({
      headerLeft: () => (
        <StyledButton onPress={() => goBack()}>
          <ArrowBack />
          <StyledName>{pokemonData.name}</StyledName>
        </StyledButton>
      ),
      headerRight: () => (
        <StyledId>#{`${pokemonData.id}`.padStart(3, "0")}</StyledId>
      ),
    });
  }

  useEffect(() => {
    if (id) {
      getPokemonData({ id, onSuccess: handlePokemonDataSuccess });
    }
  }, [id]);

  useEffect(() => {
    setOptions({
      headerLeft: () => <></>,
      headerRight: () => <></>,
    });
  }, []);

  return { pokemon, auth };
}
