OMM4 Assignemt 2

s2210238022 Dennis Hanrieder

AI-Prombt: entries currently only display the first name 
AI-Response: 

Gotcha! From the UI screenshot, looks like only the firstname is showing after -- (you probably expected both firstname + lastname + maybe birthday).

🔍 Issue Source:
Looking back at your MyLi.vue:

vue
Kopieren
Bearbeiten
<span class="view" @dblclick="editMe">{{ firstname, lastname, birthday }}</span>
The issue here is:

Vue will just render birthday inside {{ }} if you use commas like that.
Vue templates don't "automatically" handle destructuring style firstname, lastname, birthday rendering.
✅ Fix:
You should concatenate them like a string:

vue
Kopieren
Bearbeiten
<span class="view" @dblclick="editMe">{{ firstname }} {{ lastname }} -- {{ birthday }}</span>
Or if you want a more formatted birthday:

vue
Kopieren
Bearbeiten
<span class="view" @dblclick="editMe">{{ firstname }} {{ lastname }} -- {{ birthday.toLocaleDateString() }}</span>
