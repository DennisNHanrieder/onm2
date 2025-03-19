<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import Entry from '../modules/Entry'

interface Props {
  date: string,
  firstname?: string,
  lastname?: string,
  birthday?: Date
}

const props = withDefaults(defineProps<Props>(), {
  firstname: "default firstname",
  lastname: "default lastname",
  birthday: () => new Date()
})

const emit = defineEmits<{
  (e: 'delete-me'): void
  (e: 'save-me', entry: Entry): void
}>()

const editing = ref<boolean>(false)
const firstname = ref<string>(props.firstname)
const lastname = ref<string>(props.lastname)
const birthday = ref<Date>(props.birthday)

const birthdayString = computed({
  get: () => birthday.value.toISOString().slice(0, 10),
  set: (val: string) => {
    birthday.value = val ? new Date(val) : new Date('2000-01-01');
  }
})

function editMe(): void {
  editing.value = true
  nextTick(() => myInput.value?.focus())
}

function saveMe(): void {
  editing.value = false
  emit('save-me', new Entry(
    new Date(),
    firstname.value,
    lastname.value,
    birthday.value
  ))
}

const myInput = ref<HTMLInputElement|null>(null)
</script>

<template>
  <li :class="{editing:editing}">
    <button @click="emit('delete-me')">x</button>
    <em>{{ date }}</em> --
    <span class="view" @dblclick="editMe">{{ firstname }} {{ lastname }} -- {{ birthday.toLocaleDateString() }}</span>

    <div v-if="editing">
      <input class="edit" v-model="firstname" placeholder="Firstname" ref="myInput">
      <input class="edit" v-model="lastname" placeholder="Lastname">
      <input class="edit" type="date" v-model="birthdayString">
      <button @click="saveMe">Save</button>
    </div>
  </li>
</template>

<style scoped>
.edit {
  display: block;
  margin-bottom: 5px;
}

li.editing .view {
  display: none;
}

button {
  margin-right: 5px;
}
</style>
