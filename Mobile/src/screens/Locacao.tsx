import { ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import { CardPrincipal } from "../components/Card/Principal";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { View } from "native-base";
import { Service } from "../components/Card/Service";
import api from "../services/api";

export interface HoteisProps {
  id: number
  nome: string
  descricao: string
  preco?: number
  cardapio?: string
  logo: string
  email: string
  site: string
  telefone: string
  endereco: string
  latitude: string
  longitude: string
  face: string
  insta: string
  whats: string
  categoria?: string
}

export function Locacao() {
  const [hoteis, setHoteis] = useState<HoteisProps[]>()
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    api.get('/hoteis').then((response) => {
      setHoteis(response.data.hoteis)
      setLoading(true)
    })
  }, [])

  if (!loading) {
    return <Loading />
  }

  return (
    <ScrollView flex={1} mb={10} bg="gray.100" >
      <Header />
      <View>
          <Service />
      </View>
    </ScrollView>
  )
}