<template>
    <v-container>
        <v-form v-model="valid">
            <v-container class="d-flex justify-center">
                    <v-row>
                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="6"
                        >
                            <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="12"
                        >
                            <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                            ></v-text-field>
                        </v-col>
                        <!--<v-col-->
                                <!--cols="12"-->
                                <!--md="3">-->
                            <!--<v-switch v-model="something" class="ma-4" label="Something"></v-switch>-->
                        <!--</v-col>-->
                    </v-row>
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name      : 'home',
        components: {},
        data      : () => ({
            valid     : false,
            firstname : '',
            lastname  : '',
            something : '',
            nameRules : [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email     : '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        })
    }
</script>
