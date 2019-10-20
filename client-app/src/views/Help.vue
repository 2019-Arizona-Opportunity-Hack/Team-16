<template>
    <div class="container mt-4">
        <h1>USER ID: {{userID}}</h1>
        <!--<i class="deep-purple&#45;&#45;text fas fa-3x fa-couch"/>-->
        <!--<i class="red&#45;&#45;text fas fa-3x fa-street-view"/>-->
        <!--<i class="fas fa-3x fa-hamburger"/>-->
        <!--<i class="blue&#45;&#45;text fas fa-3x fa-tshirt"/>-->
        <div v-if="step === 1">
            <v-row>I have been dealing with...</v-row>
            <v-form v-model="isValid">
                <v-row>
                    <v-col cols="6">
                        <v-row class="mb--2">
                            <v-col cols="12" class="my-0 py-0">
                                <v-checkbox v-model="dealingWith.bullying"
                                            label="Bullying" color="blue"
                                            value="true" hide-details/>
                            </v-col>
                            <v-col cols="12" class="my-0 py-0">
                                <v-text-field class="" v-model="dealingWith.bullyingValue"
                                              label="Please explain:"/>
                            </v-col>
                        </v-row>
                        <v-row class="mb--2">
                            <v-col cols="12" class="my-0 py-0">
                                <v-checkbox v-model="dealingWith.domesticAbuse"
                                            label="Domestic Abuse" color="blue"
                                            value="true" hide-details/>
                            </v-col>
                            <v-col cols="12" class="my-0 py-0">
                                <v-text-field class=""
                                              v-model="dealingWith.domesticAbuseValue"
                                              label="Please explain:"/>
                            </v-col>
                        </v-row>
                        <v-row class="mb--2">
                            <v-col cols="12" class="my-0 py-0">
                                <v-checkbox v-model="dealingWith.suicidalThoughts"
                                            label="Suicidal Thoughts" color="blue"
                                            value="true" hide-details/>
                            </v-col>
                            <v-col cols="12" class="my-0 py-0">
                                <v-text-field class=""
                                              v-model="dealingWith.suicidalThoughtsValue"
                                              label="Please explain:"/>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols-6>
                        <v-row class="mb--2">
                            <v-col cols="12" class="my-0 py-0">
                                <v-checkbox v-model="dealingWith.loneliness"
                                            label="Loneliness" color="blue"
                                            value="true" hide-details/>
                            </v-col>
                            <v-col cols="12" class="my-0 py-0">
                                <v-text-field class=""
                                              v-model="dealingWith.lonelinessValue"
                                              label="Please explain:"/>
                            </v-col>
                        </v-row>
                        <v-row class="mb--2">
                            <v-col cols="12" class="my-0 py-0">
                                <v-checkbox v-model="dealingWith.addiction"
                                            label="Addiction" color="blue"
                                            value="true" hide-details/>
                            </v-col>
                            <v-col cols="12" class="my-0 py-0">
                                <v-text-field class="" v-model="dealingWith.addictionValue"
                                              label="Please explain:"/>
                            </v-col>
                        </v-row>
                        <v-row class="mb--2">
                            <v-col cols="12" class="my-0 py-0">
                                <v-checkbox v-model="dealingWith.hunger"
                                            label="Hunger" color="blue"
                                            value="true" hide-details/>
                            </v-col>
                            <v-col cols="12" class="my-0 py-0">
                                <v-text-field class="" v-model="dealingWith.hungerValue"
                                              label="Please explain:"/>
                            </v-col>
                        </v-row>
                        <v-row class="mb--2">
                            <v-col cols="12" class="my-0 py-0">
                                <v-checkbox v-model="dealingWith.other"
                                            label="Other" color="blue"
                                            value="true" hide-details/>
                            </v-col>
                            <v-col cols="12" class="my-0 py-0">
                                <v-text-field class="" v-model="dealingWith.otherValue"
                                              label="Please state what you need help with:"/>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-form>
            <v-row style="position: absolute; bottom: 2em; right: 0; width: 100%;">
                <v-col md="12" class="text-center">
                    <v-btn x-large :disabled="!isValid" color="success" @click="step++">Next</v-btn>
                </v-col>
            </v-row>
        </div>
        <div v-else>
            <div class="text-right">
                <v-btn class="float-right" color="info" @click="step--">Back</v-btn>
            </div>
            <v-row>I would like help with...</v-row>
            <br>
            <v-form v-model="isValid">
                <v-row class="mb--2">
                    <v-col cols="12" class="my-0 py-0">
                        <v-checkbox v-model="helpWith.clothing"
                                    label="Clothing" color="blue"
                                    value="true" hide-details/>
                    </v-col>
                    <v-col cols="12" class="my-0 py-0">
                        <v-text-field class="" v-model="helpWith.clothingValue"
                                      label="What clothing items and sizes do you need?"/>
                    </v-col>
                </v-row>
                <v-row class="mb--2">
                    <v-col cols="12" class="my-0 py-0">
                        <v-checkbox v-model="helpWith.food"
                                    label="Food" color="blue"
                                    value="true" hide-details/>
                    </v-col>
                    <v-col cols="12" class="my-0 py-0">
                        <v-text-field class="" v-model="helpWith.foodValue"
                                      label="Please list any food allergies:"/>
                    </v-col>
                </v-row>
                <v-row class="mb--2">
                    <v-col cols="12" class="my-0 py-0">
                        <v-checkbox v-model="helpWith.furniture"
                                    label="Furniture" color="blue"
                                    value="true" hide-details/>
                    </v-col>
                    <v-col cols="12" class="my-0 py-0">
                        <v-text-field class="" v-model="helpWith.furnitureValue"
                                      label="Please list the items you need:"/>
                    </v-col>
                </v-row>
                <v-row class="mb--2">
                    <v-col cols="12" class="my-0 py-0">
                        <v-checkbox v-model="helpWith.other"
                                    label="Other" color="blue"
                                    value="true" hide-details/>
                    </v-col>
                    <v-col cols="12" class="my-0 py-0">
                        <v-text-field class="" v-model="helpWith.otherValue"
                                      label="Please state what you need help with:"/>
                    </v-col>
                </v-row>
            </v-form>
            <v-row style="position: absolute; bottom: 2em; right: 0; width: 100%;">
                <v-col md="12" class="text-center">
                    <v-btn x-large :disabled="!isValid" color="success" @click="submit">Submit</v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>

    export default {
        name      : 'help',
        components: {},
        data      : () => ({
            userID     : null,
            step       : 1,
            isValid    : false,
            something  : null,
            dealingWith: {
                bullying             : false,
                bullyingValue        : '',
                domesticAbuse        : false,
                domesticAbuseValue   : '',
                suicidalThoughts     : false,
                suicidalThoughtsValue: '',
                loneliness           : false,
                lonelinessValue      : '',
                addiction            : false,
                addictionValue       : '',
                hunger               : false,
                hungerValue          : '',
                other                : false,
                otherValue           : ''
            },
            helpWith   : {
                clothing      : false,
                clothingValue : '',
                food          : false,
                foodValue     : '',
                furniture     : false,
                furnitureValue: '',
                other         : false,
                otherValue    : ''
            },
            isRequired : [
                v => !!v || 'Field is required.'
            ]
        }),
        created () {
            this.userID = this.$route.params.user
        },
        methods   : {
            submit () {
                let finalArr    = []
                let dealingWith = ['bullying',
                                   'domesticAbuse',
                                   'suicidalThoughts',
                                   'loneliness',
                                   'addiction',
                                   'hunger',
                                   'other']
                let needs       = ['clothing',
                                   'food',
                                   'furniture',
                                   'other']
                needs.forEach(need => {
                    if (this.helpWith[need]) {
                        let name = need
                        if (need === 'other') {
                            name = 'needOther'
                        }
                        finalArr.push({
                            userID     : this.userID,
                            name       : name,
                            description: this.helpWith[need + 'Value']
                        })
                    }
                })
                dealingWith.forEach(issue => {
                    if (this.dealingWith[issue]) {
                        let name = issue
                        if (issue === 'other') {
                            name = 'issueOther'
                        }
                        finalArr.push({
                            userID     : this.userID,
                            name       : name,
                            description: this.dealingWith[issue + 'Value']
                        })
                    }
                })
                window.console.log('finalArr', finalArr)

                // this.axios.post('', finalArr)
                //     .then((response) => {
                //         window.console.log(response.data)
                //     })
                //     .catch(error => {
                //         window.console.log(error)
                //     })
            }
        }
    }
</script>

<style scoped>
</style>
