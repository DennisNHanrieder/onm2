<script setup lang="ts">
import {ref} from 'vue'
import Entry from './modules/Entry'
import MyLi from './components/MyLi.vue'

const contents = ref<string>("")
const entryData = ref<Entry[]>([])

function saveEntry(): void {
  const entry: Entry = new Entry(new Date(), contents.value)

  entryData.value.push(entry)
  contents.value = ""
}

function deleteEntry(index: number): void {
  entryData.value.splice(index,1)
}

function updateEntry(index: number, entry: Entry): void {
  entryData.value[index] = entry
}

</script>

<template>

<ul>
  <MyLi v-for="(entry,index) in entryData" 
    :date = "entry.dateStr"
    :contents = "entry.contents"
    :key = "entry.dateStr"
    @delete-me="deleteEntry(index)"
    @save-me="updateEntry(index, $event)"
  />

</ul>

<textarea v-model="contents"></textarea><br>
<button @click="saveEntry">Save</button>

</template>

<style scoped>

</style>
