<template>
  <q-page >
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
        <q-btn class="q-mb-lg" :disable="!newQweetContent" unelevated rounded color="primary" label="Qweet" no-caps  />
      </div>
    </div>

    <q-separator class="divider" color="grey-2" size="10px"/>


    <q-list>


      <q-item class="q-py-md">
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
            <span class="text-grey-7"> @ahmadkhan</span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1" >
            I'll be in your neighborhood doing errands this weekend.
                  Do you want to grab brunch?
          </q-item-label>
          <div class="row">
            <q-btn color="grey" icon="gift">

            </q-btn>

          </div>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>


    </q-list>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHome',
  data(){
    return{
      newQweetContent: ''
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

</style>
