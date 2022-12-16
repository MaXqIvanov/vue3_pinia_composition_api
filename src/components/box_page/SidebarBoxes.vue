<template>
    <div class="sidebar_boxes">
        <div class="sidebar_boxes__block">
            <div @click="boxStore.setCurrentCategory(null)" class="sidebar_boxes__close"></div>
            <div class="sidebar_boxes__box">
                <div :style="{backgroundColor: boxStore.current_box?.color}" class="box__color">
                    <div :style="{backgroundColor: boxStore.current_box?.color_blur}" class="box__color__blur"></div>
                </div>
            </div>
            <div class="separate_line"></div>
            <div class="sidebar_boxes__body">
                <div class="shadow_block sidebar_boxes__shadow_block"></div>
                <div class="shadow_block sidebar_boxes__shadow_block"></div>
                <div class="shadow_block sidebar_boxes__shadow_block"></div>
                <div class="shadow_block sidebar_boxes__shadow_block"></div>
            </div>
            <div class="sidebar_boxes__footer">
                <input placeholder="Введите количество"/>
                <Button v-if="!is_approve_delete" @click="is_approve_delete = !is_approve_delete" :text_color="'white'" :background_color="'#FA7272'" :title="'Удалить предмет'" :style="{padding: '1vw 5vw',  whiteSpace: 'nowrap'}"/>
                <div v-else class="group_btn">
                    <Button @click="is_approve_delete = !is_approve_delete" :text_color="'#2D2D2D'" :background_color="'white'" :title="'Отмена'" :style="{padding: '1vw 2vw',  whiteSpace: 'nowrap'}"/>
                    <Button @click="is_approve_delete = !is_approve_delete" :text_color="'white'" :background_color="'#FA7272'" :title="'Подтвердить'" :style="{padding: '1vw 1.5vw',  whiteSpace: 'nowrap'}"/>
                </div>
            </div>
        </div>
        <div @click="boxStore.setCurrentCategory(null)" class="sidebar_boxes__plug"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBoxStore } from "../../store/BoxStore";
import Button from "../ui/Button.vue";
const boxStore = useBoxStore()
let is_approve_delete = ref(false);

</script>

<style scoped lang="scss">
.group_btn{
    width: 90%;
    display: flex;
    justify-content: space-around;
}
.sidebar_boxes__shadow_block{
    overflow: hidden;
    height: 1vw;
    width: 86%;
    border-radius: 0.6vw;
    margin-bottom: 4%;
    &:nth-child(1){
        height: 2.7vw;
        margin-bottom: 5%;
    }
}
.sidebar_boxes__footer{
    width: 100%;
    height: 17%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.sidebar_boxes__body{
    width: 100%;
    height: 20%;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.separate_line{
    margin-top: -3%;
    margin-bottom: 5%;
}
.sidebar_boxes__box{
    margin-top: 3%;
    position: relative;
    width: 15vw;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 550px){
        margin-top: 3.2vh;
    }
}
.box__color__blur{
    position: absolute;
    top: -1.2vw;
    right: -1.2vw;
    backdrop-filter: blur(1vw);
    height: 18vh;
    width: 18vh;
}
.box__color{
    position: relative;
    height: 18vh;
    width: 18vh;
}
.sidebar_boxes__close{
    position: absolute;
    top: 1vw;
    right: 1vw;
    z-index: 110;
    background-image: url('../../assets/images/close_btn.svg');
    background-repeat: no-repeat;
    background-size: contain;
    height: 1vw;
    width: 1vw;
    cursor: pointer;
}
@keyframes sidebar_animation{
    0%{
        width: 0%;
    }
    100%{
        width: 35%;
    }
}
.sidebar_boxes__block{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 35%;
    height: 100%;
    min-height: 100vh;
    z-index: 100;
    animation: alternate linear sidebar_animation 0.5s;
    background-color: rgba(38, 38, 38, 0.8);
    border-left: 0.1vw solid #4D4D4D;
    box-sizing: border-box;
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}
.sidebar_boxes__plug{
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 20;
    min-height: 100vh;
    width: 100vw;
    height: fit-content;
    background: black;
    opacity: 0%;
}
</style>