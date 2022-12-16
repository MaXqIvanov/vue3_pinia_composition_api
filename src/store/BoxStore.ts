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
        current_index_box: null as number | null,
        is_visible_sidebar: false as boolean,
        drag_id: null as number | null,
        drag_index: null as number | null
    }),
    actions: {
        setCurrentBox(box: IBox | null, index: number){
            this.current_box = box
            this.current_index_box = index
            this.is_visible_sidebar = !this.is_visible_sidebar
        },
        dragStartHandler(event: any, box: IBox, index: number){
           this.drag_id = box.id
           this.drag_index = index
           console.log(event)
           console.log(box)
           console.log(index);
        },
        dragLeaveHandler(event: any){
        },
        dragEndHandler(event: any){
            
        },
        dragOverHandler(event: any){
            event.preventDefault();
        },
        DropHandler(event: any, box: IBox, index: number){
            event.preventDefault();
            if(this.drag_index !== null && Object.keys(this.box[index]).length === 0){
                this.box[index] = this.box[this.drag_index]
                this.box[this.drag_index] = {} as IBox
                localStorage.setItem('BP_boxes', JSON.stringify(this.box))
            }
            this.drag_id = null
            this.drag_index = null
        },
        async getBoxes(){
          const local: string = localStorage.getItem('BP_boxes') as string
          const box = JSON.parse(local)
          console.log(box)
          if(box){
            this.box = box
          }
        },
        async changeCountBoxes(event: any){
            if(this.current_index_box && event.target.value >= 0 && event.target.value !== null){
                this.box[this.current_index_box].count = event.target.value
                localStorage.setItem('BP_boxes', JSON.stringify(this.box))
            }
        },
        async deleteBox(){
            if(this.current_index_box){
                this.box[this.current_index_box] = {} as IBox
                this.is_visible_sidebar = false
                localStorage.setItem('BP_boxes', JSON.stringify(this.box))
            }
        },
        async returnAll(){
            this.box = [{
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
        ] as IBox[]
            localStorage.setItem('BP_boxes', JSON.stringify(this.box))
        }
    },
})