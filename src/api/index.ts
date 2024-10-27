import { METHODS, URL_API } from '../constants'

interface getContentProps {
    lat: number
    long: number
    variables: string[]
}

export const getContent = ({ lat, long, variables }: getContentProps) =>
    fetch(
        `${URL_API}v1/forecast?latitude=${lat}&longitude=${long}&daily=${variables.join(',')}&timezone=Europe/Moscow&past_days=10`,
        { method: METHODS.GET },
    ).then((result) => {
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`)
        }
        return result.json()
    })
