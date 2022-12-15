<template>
    <div class="footer border_block">
        <div class="shadow_block footer__shadow_block">
            
        </div>
        <div class="image footer__image"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.footer__image{
    position: absolute;
    top: 1vw;
    right: 1vw;
    background-image: url('../assets/images/close_btn.svg');
    height: 1.2vw;
    width: 1.2vw;
    cursor: pointer;
}
.footer{
    position: relative;
    border: 0.1vw solid;
    border-radius: 1vw;
    padding: 3vw;
    padding-right: 6vw;
    box-sizing: border-box;
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer__shadow_block{
    border-radius: 1vw;
    height: 3.5vw;
    width: 100%;
}
</style>