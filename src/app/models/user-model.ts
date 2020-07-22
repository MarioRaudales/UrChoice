export class UserInformation {
    first_name: string;
    last_name: string;
    age?: number;
    bannerMessage?: string;
    country?: string;
    city?: string;
    hobbies?: string;
    work?: string;
    votationCounts?: number;
    votationCreated?: number;
    followers?: number;
    following?: number;
    description?: string;
    education?: string;
    photoURL?: string;
    bannerURL?: string;
    email: string;
    constructor(
        first_name= '',
        last_name= '',
        age = 0,
        bannerMessage= '',
        city= '',
        country= '',
        hobbies= '',
        work= '',
        votationCounts= 0,
        votationCreated= 0,
        followers= 0,
        following= 0,
        description= '',
        education= '',
        photoURL= '',
        bannerURL= '',
        email= ''
    ) {
        this.first_name= first_name
        this.last_name= last_name
        this.age =  age
        this.bannerMessage= bannerMessage
        this.city= city
        this.country= country
        this.hobbies= hobbies
        this.work= work
        this.votationCounts= votationCounts
        this.votationCreated= votationCreated
        this.followers= followers
        this.following= following
        this.description= description
        this.education= education
        this.photoURL= photoURL
        this.bannerURL= bannerURL
        this.email= email
    }
}
export class UserGoogleInformation {
    family_name: string;
    given_name: string;
    granted_scopes: string;
    id: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean;
    providerId: string;
    email: string;
    constructor(
        family_name= '',
        given_name= '',
        granted_scopes = '',
        id= '',
        locale= '',
        name= '',
        picture= '',
        verified_email= false,
        providerId= '',
        email= ''
    ) {
        this.family_name= family_name
        this.given_name= given_name
        this.granted_scopes= granted_scopes
        this.id= id
        this.locale= locale
        this.name= name
        this.picture= picture
        this.verified_email= verified_email
        this.providerId= providerId
        this.email= email
    }
}