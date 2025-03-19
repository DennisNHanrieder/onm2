<script setup lang="ts">
import { ref, computed } from 'vue'
import Entry from './modules/Entry'

const firstname = ref<string>("")
const lastname = ref<string>("")
const birthday = ref<Date>(new Date('2000-01-01'))
const entryData = ref<Entry[]>([])
const errors = ref<string[]>([])

function saveEntry(): void {
  errors.value = []
  if (!firstname.value.trim()) errors.value.push('Firstname is required.')
  if (!lastname.value.trim()) errors.value.push('Lastname is required.')

  const minDate = new Date('1900-01-01')
  const maxDate = new Date('2099-12-31')

  if (birthday.value < minDate || birthday.value > maxDate) {
    errors.value.push('Birthday must be between 1900-01-01 and 2099-12-31.')
  }

  if (errors.value.length > 0) return

  const entry: Entry = new Entry(new Date(), firstname.value, lastname.value, birthday.value)
  entryData.value.push(entry)
  firstname.value = ""
  lastname.value = ""
  birthday.value = new Date('2000-01-01')
}

function deleteEntry(index: number): void {
  entryData.value.splice(index, 1)
}

function updateEntryFirstname(index: number, value: string): void {
  entryData.value[index].firstname = value
}

function updateEntryLastname(index: number, value: string): void {
  entryData.value[index].lastname = value
}

function updateEntryBirthday(index: number, value: string): void {
  entryData.value[index].birthday = new Date(value)
}

const birthdayString = computed({
  get: () => birthday.value.toISOString().slice(0, 10),
  set: (val: string) => {
    birthday.value = val ? new Date(val) : new Date('2000-01-01');
  }
})
</script>

<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Birthday</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in entryData" :key="entry.dateStr">
          <td><input v-model="entry.firstname" @input="updateEntryFirstname(index, entry.firstname)" /></td>
          <td><input v-model="entry.lastname" @input="updateEntryLastname(index, entry.lastname)" /></td>
          <td><input type="date" :value="entry.birthday.toISOString().slice(0, 10)" @input="updateEntryBirthday(index, ($event.target as HTMLInputElement).value)" /></td>
          <td><button class="delete-btn" @click="deleteEntry(index)">x</button></td>
        </tr>
      </tbody>
    </table>

    <div v-if="errors.length" class="error-box">
      <ul>
        <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
      </ul>
    </div>

    <div class="form">
      <textarea v-model="firstname" placeholder="Firstname"></textarea>
      <textarea v-model="lastname" placeholder="Lastname"></textarea>
      <input type="date" v-model="birthdayString">
      <button @click="saveEntry">Save</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}
th, td {
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: left;
}
th {
  background: #333;
  color: #fff;
}
td input {
  width: 100%;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}
textarea, input[type="date"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1 1 30%;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  background: #4caf50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #45a049;
}
.delete-btn {
  background: #f44336;
}
.delete-btn:hover {
  background: #d32f2f;
}
.error-box {
  background: #ffe0e0;
  border: 1px solid #f44336;
  padding: 0.5rem;
  border-radius: 4px;
  color: #d32f2f;
}
</style>
