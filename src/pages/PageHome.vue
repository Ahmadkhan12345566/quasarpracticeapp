<template>
  <q-page class="relative-position" >
    <q-scroll-area class="absolute fullscreen">
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
     <div class="col">
       <q-input class="new-qweet" bottom-slots
                v-model="newQweetContent"  placeholder="What's happening?" counter maxlength="280" :dense="dense" autogrow>

         <template v-slot:before>
           <q-avatar size="xl">
             <img src="https://cdn.quasar.dev/img/avatar5.jpg">
           </q-avatar>
         </template>

       </q-input>
     </div>
      <div class="col col-shrink">
        <q-btn @click="addNewQweet" class="q-mb-lg" :disable="!newQweetContent" unelevated rounded color="primary" label="Qweet" no-caps  />
      </div>
    </div>

    <q-separator class="divider" color="grey-2" size="10px"/>


    <q-list separator>
      <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
         class="slow"
      >

      <q-item v-for="qweet in qweets" :key="qweet.date" class="qweet q-py-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section class="text-subtitle1">
          <q-item-label >
            <strong>
            Arslan Ahmad
            </strong>
            <span class="text-grey-7"> @ahmadkhan &bull;  <br class="lt-md"> {{ relativeDate(qweet.date) }} </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1" >
           {{ qweet.content }}
          </q-item-label>
          <div class="qweet-icons row justify-between q-mt-sm">
            <q-btn flat round color="primary" icon="far fa-comment" size="sm" />
            <q-btn flat round color="primary" icon="fas fa-retweet" size="sm" />
            <q-btn flat round color="primary" icon="far fa-heart" size="sm" />
            <q-btn @click="deleteQweet(qweet)" flat round color="primary" icon="fas fa-trash" size="sm" />
          </div>
        </q-item-section>

      </q-item>
      </transition-group>


    </q-list>

    </q-scroll-area>
  </q-page>
</template>

<script>

import { defineComponent } from 'vue';
import { formatDistance } from 'date-fns'

export default defineComponent({
  name: 'PageHome',
  data(){
    return{
      newQweetContent: '',
      qweets:[
        {
          content:'I ll be in your neighborhood doing errands this weekend.Do you want to grab brunch?',
          date:1635971999205
        },
        {
          content:'Do you want to grab brunch?',
          date:1635971970244
        }
      ]

    }
  },
  methods:{
    relativeDate(value){
      return formatDistance(value, new Date())
    },
    addNewQweet(){
      console.log("Add new qweet")
      let Qweet= {
        content:this.newQweetContent,
        date:Date.now()
      }
      this.qweets.unshift(Qweet)
      this.newQweetContent = ' '
    },
    deleteQweet(qweet){
      let dateToDelete = qweet.date
      let index = this.qweets.findIndex(qweet => qweet.date === dateToDelete)
      this.qweets.splice(index,1)
    }
  }
})
</script>
<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left: -5px

.qweet:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)
</style>
