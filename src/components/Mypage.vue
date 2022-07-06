<template>
    <div>
        <ul>
            <!-- persons是一个数据池 -->
            <li v-for="p, key in persons">{{key}}{{p.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
           persons:[
            {
                name:'张三',
                age:'18'
            },
            {
                name:'李四',
                age:'28'
            },
           ]
        }

    }
}
</script>