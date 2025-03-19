<script setup lang="ts">
import { ref, nextTick } from 'vue'
import Entry from '../modules/Entry'

interface Props {
  date: string,
  contents?: string  // just an example for optional Props
}

//const props = defineProps<Props>()
const props = withDefaults(defineProps<Props>(), {
  contents: "default content value"
})

const emit = defineEmits<{
  (e: 'delete-me'): void
  (e: 'save-me', entry: Entry): void
}>()

const editing = ref<boolean>(false)
const myContents = ref<string>(props.contents)
const myInput = ref<HTMLInputElement|null>(null)

function editMe(): void {
  editing.value = true
  nextTick(() => myInput.value!.select())
}

function saveMe(): void {
  editing.value = false
  emit('save-me', new Entry(
    new Date(),
    myContents.value
  ))
}

</script>

<template>

  <li :class="{editing:editing}">
    <button @click="emit('delete-me')">x</button>
    <em> {{ date }}</em> -- 
    <span class="view" @dblclick="editMe">{{ contents }}</span>
    <input class="edit" @blur="saveMe" v-model="myContents" ref="myInput">
  </li>
  
</template>

<style scoped>

.edit {
  display: none
}

li.editing .edit {
  display: inline
}

li.editing .view {
  display: none
}

</style>
