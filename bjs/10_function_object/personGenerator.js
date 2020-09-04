const monthDays = {
    monthsJson: `{  
        "count": 12,
        "list": {     
            "id_1": ["Января", 31],
            "id_2": ["Февраля", 28],
            "id_3": ["Марта", 31],
            "id_4": ["Апреля", 30],
            "id_5": ["Мая", 31],
            "id_6": ["Июня", 30],
            "id_7": ["Июля", 31],
            "id_8": ["Августа", 31],
            "id_9": ["Сентября", 30],
            "id_10":["Октября", 31],
            "id_11": ["Ноября" , 30], 
            "id_12": ["Декабря" , 31]        
        }
    }`
};


const femaleAdditionalParameters = {
    midNameJson: `{  
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Татьяновна",
            "id_3": "Василисовна",
            "id_4": "Алёновна",
            "id_5": "Мариевна",
            "id_6": "Галиновна",
            "id_7": "Анновна",
            "id_8": "Альфиевна",
            "id_9": "Ариевна",
            "id_10": "Анжеловна"
        }
    }`
};

const maleAdditionalParameters = {
    midNameJson: `{  
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
/*
    profession: `{  
        "count": 6,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтёр",
            "id_4": "Программист",
            "id_5": "Продавец",
            "id_6": "Преподаватель"
        }
    }`*/
};


const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Татьяна",
            "id_3": "Василиса",
            "id_4": "Алёна",
            "id_5": "Мария",
            "id_6": "Галина",
            "id_7": "Анна",
            "id_8": "Альфия",
            "id_9": "Арина",
            "id_10": "Анжела"
        }
    }`,

    GENDER_MALE: {
        gender:'Мужчина',
        professionCount: 6,
        professions: ["Слесарь", "Солдат", "Шахтёр", "Программист","Продавец","Преподаватель"]
    },

    GENDER_FEMALE: {
        gender:'Женщина',
        professionCount: 6,
        professions: ["Медсестра", "Стюардесса", "Проводница", "Программист","Продавец","Преподаватель"]
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
  
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(selectedGender = this.GENDER_MALE) {
        return (selectedGender === this.GENDER_MALE) ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
    },

     randomSurname: function(selectedGender = this.GENDER_MALE) {
        var surname = this.randomValue(this.surnameJson);
        if (selectedGender === this.GENDER_FEMALE) {surname=surname+'а'};
        return surname;
    },

    randomGender: function() {
        return (this.randomIntNumber()===1) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomAge: function(){
        return this.randomIntNumber(2002, 1965); 
    },

    monthDay: function(monthList){
        return this.randomValue(monthList);  
    },

    randomMidName: function(additionalParameters){
       return this.randomValue(additionalParameters.midNameJson);
    },
    
    randomProfession: function(selectedGender = this.GENDER_MALE){
        return selectedGender.professions[this.randomIntNumber(selectedGender.professions.length-1,0)];
     },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();      
        this.person.additionalData = (this.person.gender===this.GENDER_MALE) ? maleAdditionalParameters : femaleAdditionalParameters;
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.age = this.randomAge();
        this.person.midName = this.randomMidName(this.person.additionalData);
        this.person.profession = this.randomProfession(this.person.gender);  
        var monthDateBith = this.monthDay(monthDays.monthsJson);
        this.person.monthBith = monthDateBith[0];
        this.person.dayBith = monthDateBith[1];
        return this.person;
    }
};

