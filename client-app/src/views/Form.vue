<template>
    <v-container class="mt-4">
        <div v-if="step === 0" class="d-flex justify-center align-center" style="height: 32em;">
            <v-btn style="width: 20em; height: 10em;" x-large color="success" @click="iNeedHelp(false)">
                I would like to help.
                <i class="white--text fa fa-3x fa-people-carry"/>
            </v-btn>
            <div style="width: 5em;"/>
            <v-btn style="width: 20em; height: 10em;" x-large color="blue" @click="iNeedHelp(true)">
                I need help.
                <i class="fa fa-3x fa-hands-helping"/>
            </v-btn>
        </div>
        <div v-else-if="step === 1">
            <div class="text-right">
                <v-btn color="info" @click="step--">Back</v-btn>
            </div>
            <v-form v-model="stepOneValid">
                <div class="text-center" v-if="!needsHelpResponse">
                    <p class="ma-0 pa-0">How would you like to help?</p>
                    <small>(Please select at least one option.)</small>
                    <div class="d-flex justify-space-around">
                        <v-checkbox v-model="userType.isVolunteer"
                                    label="I would like to volunteer." color="green"
                                    value="yes" hide-details></v-checkbox>
                        <v-checkbox v-model="userType.isDonor" label="I would like to donate."
                                    color="green"
                                    value="yes" hide-details></v-checkbox>
                    </div>
                </div>
                <div v-else class="text-center">
                    <p class="ma-0 pa-0">We are here to help.</p>
                </div>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="firstname" :rules="isRequired" label="First Name*" required/>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field v-model="lastname" :rules="isRequired" label="Last Name*" required/>
                    </v-col>

                    <v-col cols="12" md="12">
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail*" required/>
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <v-btn :disabled="!stepOneValid || !isABoxChecked" color="success" @click="step++">Next</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </div>
        <div v-else>
            <div class="text-right">
                <v-btn color="info" @click="step--">Back</v-btn>
            </div>
            <v-form v-model="stepTwoValid">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="phoneNumber" :rules="isRequired" label="Phone Number*" required/>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-dialog
                                ref="dialog"
                                v-model="modal"
                                :return-value.sync="birthdate"
                                persistent
                                width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                        v-model="birthdate"
                                        :rules="isRequired"
                                        label="Birthday*"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="birthdate" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.dialog.save(birthdate)">OK</v-btn>
                            </v-date-picker>
                        </v-dialog>
                    </v-col>
                    <v-col v-if="userType.isDonor" cols="12">
                        <v-text-field v-model="business" label="Business"/>
                    </v-col>
                    <v-col v-if="userType.isVolunteer" cols="12">
                        <p>Shirt Size</p>
                        <v-radio-group v-model="shirtSize" row>
                            <v-radio label="XS" value="XS"/>
                            <v-radio label="SM" value="SM"/>
                            <v-radio label="MD" value="MD"/>
                            <v-radio label="LG" value="LG"/>
                            <v-radio label="XL" value="XL"/>
                            <v-radio label="XXL" value="XXL"/>
                        </v-radio-group>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="streetAddress" :rules="isRequired" label="Address*" required/>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="city" :rules="isRequired" label="City*" required/>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="state" :rules="isRequired" label="State*" required/>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="zip" :rules="isRequired" label="Zipcode*" required/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12" class="text-center">
                        <v-btn :disabled="!stepTwoValid" color="success" @click="submit">Submit</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </div>
    </v-container>
</template>

<script>
    export default {
        name      : 'home',
        components: {},
        data      : () => ({
            needsHelpResponse: false,
            modal            : false,
            step             : 0,
            userType         : {
                isVolunteer: null,
                isDonor    : null,
                isClient   : null
            },
            stepOneValid     : false,
            stepTwoValid     : false,
            firstname        : null,
            lastname         : null,
            email            : '',
            phoneNumber      : null,
            birthdate        : null,
            streetAddress    : null,
            city             : null,
            state            : null,
            zip              : null,
            business         : null,
            shirtSize        : null,
            isRequired       : [
                v => !!v || 'Field is required.'
            ],
            emailRules       : [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        }),
        computed  : {
            isABoxChecked () {
                if (this.userType.isVolunteer || this.userType.isDonor || this.needsHelpResponse) {
                    return true
                }
                return false
            }
        },
        methods   : {
            submit () {

                let userObj = {
                    firstname    : this.firstname,
                    lastname     : this.lastname,
                    email        : this.email,
                    phoneNumber  : this.phoneNumber,
                    birthdate    : this.birthdate,
                    streetAddress: this.streetAddress,
                    city         : this.city,
                    state        : this.state,
                    zip          : this.zip,
                    business     : this.business,
                    shirtSize    : this.shirtSize
                }

                this.axios.post('http://127bd9cc.ngrok.io/user', userObj)
                    .then((response) => {
                        window.console.log(response.data)
                        // if (this.needsHelpResponse) {
                        //     this.$router.push({name: 'help', params: {user: response.data}})
                        // } else if (this.userType.isDonor) {
                        //     this.$router.push({name: 'donate', params: {user: response.data}})
                        // } else {
                        //     this.$router.push('/thankyou')
                        // }
                    })
                    .catch(error => {
                        window.console.log(error)
                    })
            },
            iNeedHelp (response) {
                this.needsHelpResponse = response
                this.step++
            }
        }
    }
</script>
