import {defineStore} from 'pinia'

interface IBox {
    id: number,
    color: string,
    count: number
}
export const useBoxStore = defineStore('boxStore', {
    state: () => ({
        box: [{
            id: 1,
            color: '#7FAA65',
            count: 4
        }, {
            id: 2,
            color: '#AA9765',
            count: 2
        },{
            id: 3,
            color: '#656CAA',
            count: 5
        },{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ] as IBox[]
    })
})