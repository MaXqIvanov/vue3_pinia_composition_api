import { defineStore } from "pinia";

interface IBox {
  id: number;
  color: string;
  color_blur: string;
  count: number;
}
interface IInputFileEvent extends Event {
  target: HTMLInputElement;
}

export const useBoxStore = defineStore("boxStore", {
  state: () => ({
    box: [
      {
        id: 1,
        color: "#7FAA65",
        count: 4,
        color_blur: "184, 217, 152, 0.35",
      },
      {
        id: 2,
        color: "#AA9765",
        count: 2,
        color_blur: "217, 187, 152, 0.35",
      },
      {
        id: 3,
        color: "#656CAA",
        count: 5,
        color_blur: "116, 129, 237, 0.35",
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ] as IBox[],
    current_box: null as IBox | null,
    current_index_box: null as number | null,
    is_visible_sidebar: false as boolean,
    drag_id: null as number | null,
    drag_index: null as number | null,
  }),
  actions: {
    setCurrentBox(box: IBox | null, index: number | null) {
      this.current_box = box;
      this.current_index_box = index;
      this.is_visible_sidebar = !this.is_visible_sidebar;
    },
    dragStartHandler(event: IInputFileEvent, box: IBox, index: number) {
      this.drag_id = box.id;
      this.drag_index = index;
    },
    dragOverHandler(event: IInputFileEvent) {
      event.preventDefault();
    },
    DropHandler(event: IInputFileEvent, box: IBox, index: number) {
      event.preventDefault();
      if (
        this.drag_index !== null &&
        Object.keys(this.box[index]).length === 0
      ) {
        this.box[index] = this.box[this.drag_index];
        this.box[this.drag_index] = {} as IBox;
        localStorage.setItem("BP_boxes", JSON.stringify(this.box));
      }
      this.drag_id = null;
      this.drag_index = null;
    },
    async getBoxes() {
      const local: string = localStorage.getItem("BP_boxes") as string;
      const box = JSON.parse(local);
      if (box) {
        this.box = box;
      }
    },
    async changeCountBoxes(event: IInputFileEvent) {
      const value = event.target.value as unknown as number
      if (
        this.current_index_box &&
        value >= 0 &&
        event.target.value !== null
      ) {
        this.box[this.current_index_box].count = value;
        localStorage.setItem("BP_boxes", JSON.stringify(this.box));
      }
    },
    async deleteBox() {
      if (this.current_index_box) {
        this.box[this.current_index_box] = {} as IBox;
        this.is_visible_sidebar = false;
        localStorage.setItem("BP_boxes", JSON.stringify(this.box));
      }
    },
    async returnAll() {
      this.box = [
        {
          id: 1,
          color: "#7FAA65",
          count: 4,
          color_blur: "184, 217, 152, 0.35",
        },
        {
          id: 2,
          color: "#AA9765",
          count: 2,
          color_blur: "217, 187, 152, 0.35",
        },
        {
          id: 3,
          color: "#656CAA",
          count: 5,
          color_blur: "116, 129, 237, 0.35",
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ] as IBox[];
      localStorage.setItem("BP_boxes", JSON.stringify(this.box));
    },
  },
});
