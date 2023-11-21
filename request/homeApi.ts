import type { IResponse } from './type'

export namespace IGameLogin {
  export interface Request {
    providerId: number
  }

  export interface Response {
    gToken: string
    openId: number
    nickname: string
  }
}

export declare namespace IGameList {
  export interface Request {
    providerId: number
    pageNo: number
    pageSize: number
  }
  export interface IGame {
    gameId: number
    gameName: string
    gameType: number
    gameLogo: string
    providerId: number
    gameUrl: string
    instantId: string
    demoInstanceId: string
  }

  export interface Response {
    list: IGame[]
  }
}

export async function fetchGameListApi(params: IGameList.Request) {
  const {
    public: { BASE_URL },
  } = useRuntimeConfig()
  const { error, data } = await useFetch<IResponse<IGameList.Response>>(
    BASE_URL + '/business/v1/game/list',
    {
      method: 'POST',
      body: params,
    },
  )

  if (error.value) {
    throw error.value
  }

  return data.value
}

export async function fetchGuestTokenApi(params: IGameLogin.Request) {
  const {
    public: { BASE_URL },
  } = useRuntimeConfig()

  console.log(BASE_URL + '/business/v1/game/guest/login', params);
  const { error, data } = await useFetch<IResponse<IGameLogin.Response>>(
    BASE_URL + '/business/v1/game/guest/login',
    {
      method: 'POST',
      body: params,
    },
  )
  if (error.value) {
    throw error.value
  }

  return data.value
}
