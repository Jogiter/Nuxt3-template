import type { IResponse } from './type'

export namespace IContact {
  export interface Request {
    name: string
    email: string
    content: string
  }

  export interface Response {
    code: number
  }
}

export async function submitSuggestion(params: IContact.Request) {
  const {
    public: { BASE_URL_CONTACT },
  } = useRuntimeConfig()
  const { error, data } = await useFetch<IResponse<IContact.Response>>(
    BASE_URL_CONTACT + '/wza1/ow/contact/insertContact',
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
