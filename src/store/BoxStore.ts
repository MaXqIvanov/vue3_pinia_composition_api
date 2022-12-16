import {defineStore} from 'pinia'

interface IBox {
    id: number,
    color: string,
    color_blur: string,
    count: number
}

export const useBoxStore = defineStore('boxStore', {
    state: () => ({
        box: [{
                id: 1,
                color: '#7FAA65',
                count: 4,
                color_blur: '184, 217, 152, 0.35'
            }, {
                id: 2,
                color: '#AA9765',
                count: 2,
                color_blur: '217, 187, 152, 0.35'
            },{
                id: 3,
                color: '#656CAA',
                count: 5,
                color_blur: '116, 129, 237, 0.35'
            },{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
        ] as IBox[],
        current_box: null as IBox | null,
        is_visible_sidebar: false as boolean,
        drag_id: null as number | null,
    }),
    actions: {
        setCurrentCategory(action: IBox | null){
            this.current_box = action
            this.is_visible_sidebar = !this.is_visible_sidebar
        },
        dragStartHandler(event: any, box: IBox){
           this.drag_id = box.id
           console.log(event)
           console.log(box)
        },
        dragLeaveHandler(event: any){
            this.drag_id = null
        },
        dragEndHandler(event: any){
            this.drag_id = null
            
        },
        dragOverHandler(event: any){
            console.log(event)
            event.preventDefault();
            this.drag_id = null
        },
        DropHandler(event: any, box: IBox){
            event.preventDefault();
            this.drag_id = null
            console.log(event)
            console.log(box)
        }
        // async getCategory(){
        //   const {data} = await useCustomFetch<ICategory[]>('/category', {})
        //   this.category = data.value
        // },
    },
})