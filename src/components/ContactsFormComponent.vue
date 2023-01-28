<template>
    <div>
        <section class="contact_me py-5">
        <div class="inner-wrapper">
            <div class="container-fluid text-center">
                <h2 class="">Contact Us</h2>                
                <div class="row">
                    <form class="col-12 text-start" @submit.prevent="sendEmail()">
                        <div class="mb-3">
                            <input class="border-0 border-bottom form-control" 
                                type="text" name="nome" id="nome" placeholder="Nome" v-model="nome" :class="{'is-invalid': errors.nome}" > 
                                <p class="invalid-feedback" v-for="(error,index) in errors.nome" :key="index">{{ error }}</p>
                                
                        </div>
                        <div class="mb-3">
                            <input class="border-0 border-bottom form-control" 
                                type="email" name="email" id="email" placeholder="Email" v-model="email" :class="{'is-invalid': errors.email}" >
                                <p  class="invalid-feedback"  v-for="(error,index) in errors.email" :key="index">{{ error }}</p>
                        </div>
                        <div class="mb-3">
                            <textarea class="border-0 border-bottom form-control"
                               name="messaggio" id="messaggio" cols="30"
                                rows="10" placeholder="Messaggio" v-model="messaggio" :class="{'is-invalid': errors.messaggio}" ></textarea>
                                <p class="invalid-feedback" v-for="(error,index) in errors.messaggio" :key="index">{{ error }}</p>
                        </div>
                        <button class="btn btn-lg btn-primary text-white" type="submit" :disabled="loading">{{ loading ? 'Invio....' : 'Invia' }}</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
    export default {
    name: 'ContactFormComponent',
        data() {
            return {
                store,
                nome: '',
                email: '',
                messaggio: '',
                success: false,
                errors: {},
                loading : false,
            }
    },
    methods: {

        
        sendEmail() {
            this.loading = true;
            var data = {
                nome: this.nome,
                email: this.email,
                messaggio : this.messaggio,
            }
            axios.post(`${this.store.apiURL}/contacts`, data).then((res) => {
                console.log(res.data);
                this.success = res.data.success;
                    if(!this.success){
                        this.errors = res.data.errors;
                        console.log(this.errors);
                    } else {
                        this.nome = '';
                        this.email = '';
                        this.messaggio = '';
                    }
                    this.loading = false;
            });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>