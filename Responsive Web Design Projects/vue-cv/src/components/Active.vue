<template>
    <div class="act-sub">
        <div class="date">
            {{date}}
        </div>
        <div class="content">
            <div class="triangle">
            </div>
            <div class="text-content">
               <p class="text">{{content}}</p>
               <div v-if="hasLink">
                  <p class="text"> You can join us at <a href="link">{{link.substring(8,link.length-1)}}</a></p>
               </div>
            </div>
        </div>
    </div>  

</template>

<script>
export default {
    props:{
        date: String,
        content: String,
        hasLink: {
            type: Boolean,
            default: false
        },
        link: String
    }
}
</script>

<style scoped>
.act-sub{
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.date{
    width: 100%;
    border: 1px solid white;
    padding: 6px;
    text-align: start;
    padding-left: 30px;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    color: white;
}
.content{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.text{
        padding: 0;
        margin: 0;
        margin-bottom: 5px;
    }
.triangle{
      width: 0;
      height: 0;
      border-top: 20px solid white;
      border-left: 20px solid transparent;
}
.text-content{
    width: 100%;
    word-break: break-word;
    text-align: start;
    padding-left: 10px;
    min-height: 40px;
    padding-top: 10px;
    color: white;
    align-content: center;
    align-items: center;
    font-size: 14px;
    padding-bottom: 10xp;
    border-left:1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    background-color: rgba(2, 2, 2, 0.267);
}

a{
    text-decoration: none;
    font-size: 14px;
    color: white;
    font-weight: bold;
}

a:hover{
    color: rgb(0, 0, 175);
    transition: 500ms;
}
@media only screen and (max-width: 900px){
    .act-sub{
        width: 95%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .date{
        font-size: 14px;
        font-weight: bold;
    }
    .text-content{
        font-size: 14px;
        width: 100%;
        word-break: break-word;
        text-align: start;

        min-height: 30px;
        margin-bottom: 10px;
    }
    .text{
        padding: 0;
        margin: 0;
        margin-bottom: 5px;
    }
}
</style>
