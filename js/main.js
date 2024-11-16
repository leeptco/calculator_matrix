// Объявляем массивы для хранения значений
let circle_A = [], circle_B = [], circle_C = [], circle_D = [], circle_E = [], circle_F = [], circle_G = [], circle_H = [], circle_I = [], circle_M = [], circle_O = [], circle_N = [], circle_P = [], circle_R = [], circle_AE = [], circle_BE = [], circle_CE = [], circle_DE = [], circle_FE = [], circle_GE = [], circle_HE = [], circle_IE = [], circle_AE_inner = [], circle_BE_inner = [], circle_CE_inner = [], circle_DE_inner = [], circle_FE_inner = [], circle_GE_inner = [], circle_HE_inner = [], circle_IE_inner = [];

let circle_2 = [], circle_3 = [], circle_4 = [], circle_5 = [], circle_6 = [], circle_7 = [], circle_8 = [], circle_12 = [], circle_13 = [], circle_14 = [], circle_15 = [], circle_16 = [], circle_17 = [], circle_18 = [], circle_22 = [], circle_23 = [], circle_24 = [], circle_25 = [], circle_26 = [], circle_27 = [], circle_28 = [], circle_32 = [], circle_33 = [], circle_34 = [], circle_35 = [], circle_36 = [], circle_37 = [], circle_38 = [], circle_42 = [], circle_43 = [], circle_44 = [], circle_45 = [], circle_46 = [], circle_47 = [], circle_48 = [], circle_52 = [], circle_53 = [], circle_54 = [], circle_55 = [], circle_56 = [], circle_57 = [], circle_58 = [], circle_62 = [], circle_63 = [], circle_64 = [], circle_65 = [], circle_66 = [], circle_67 = [], circle_68 = [], circle_72 = [], circle_73 = [], circle_74 = [], circle_75 = [], circle_76 = [], circle_77 = [], circle_78 = [];

let physics_1 = [], physics_2 = [], physics_3 = [], physics_4 = [], physics_5 = [], physics_6 = [], physics_7 = [], physics_all = [], energy_1 = [], energy_2 = [], energy_3 = [], energy_4 = [], energy_5 = [], energy_6 = [], energy_7 = [], energy_all = [], emotion_1 = [], emotion_2 = [], emotion_3 = [], emotion_4 = [], emotion_5 = [], emotion_6 = [], emotion_7 = [], emotion_all = [];

let circle_sky = [], circle_earth = [], circle_man = [], circle_woman = [], circle_se_total = [], circle_mw_total = [], circle_spirit = [], circle_planet = [];

document.getElementById('birthdate').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Убираем все нечисловые символы
    let dd = value.slice(0, 2);
    let mm = value.slice(2, 4);
    let yyyy = value.slice(4, 8);

    // Ограничиваем значение дня до 31
    if (dd > 31) {
        dd = '31';
    }

    if (mm > 12) {
        mm = '12';
    }

    // Собираем значение обратно с точками
    let formattedValue = dd;
    if (value.length > 2) {
        formattedValue += '.' + mm;
    }
    if (value.length > 4) {
        formattedValue += '.' + yyyy;
    }

    // Устанавливаем отформатированное значение в поле ввода
    e.target.value = formattedValue;
});

// Ограничиваем ввод только числами и ставим автоматическую точку после каждого сегмента
document.getElementById('birthdate').addEventListener('keydown', function (e) {
    const key = e.key;
    const value = e.target.value;

    // Запрещаем вводить любые символы, кроме чисел и управляющих клавиш
    if (!/[0-9]/.test(key) && key !== 'Backspace' && key !== 'Tab' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
        e.preventDefault();
    }
});

// Функция для обработки ввода даты рождения
function handleDateInput() {
    const birthdateInput = document.getElementById('birthdate').value;

    if (birthdateInput === '') {
        console.log('Нужно ввести дату рождения');
    } else {
        const [dd, mm, yyyy] = birthdateInput.split('.');

        console.log(`Дата рождения: ${dd}-${mm}-${yyyy}`);

        // Вызов функции для вычисления
        calculate(dd, mm, yyyy);

        // Вызов функции для вычисления возраста
        const age = calculateAge(dd, mm, yyyy);

        // Обновление элемента для отображения возраста
        document.getElementById('ageDisplay').textContent = `Возраст: ${age}`;
    }
}

// Обработчик события клика на кнопку
document.querySelector('.birthdate__btn__inner').addEventListener('click', handleDateInput);

// Обработчик события нажатия клавиши Enter
document.getElementById("birthdate").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        handleDateInput();
    }
});


// Функция для вычисления возраста
function calculateAge(dd, mm, yyyy) {
    const birthDate = new Date(yyyy, mm - 1, dd); // Месяцы начинаются с 0
    const today = new Date();
    let textAge = 'года';

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Если день рождения еще не наступил в этом году, уменьшаем возраст на 1
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age === 1) { textAge = 'год'; }
    else if (age < 0) {
        age = '';
        textAge = `введите год до ${today.getFullYear()}`;
    }
    else if (age % 5 === 0) { textAge = 'лет'; } 

    return `${age} ${textAge}`;
}

function calculate(dd, mm, yyyy) {
    // Ваша основная логика, которая обновляет содержимое элементов
    for (let i = 0; i < 1; i++) {  // Используйте нужный индекс вместо 1
        // Выполняем расчеты основной энергии (большие кружки)
        circle_A[i] = parseInt(base22(dd));
        circle_B[i] = parseInt(base22(mm));
        circle_C[i] = parseInt(base22(yyyy));
        circle_D[i] = parseInt(base22(circle_A[i] + circle_B[i] + circle_C[i]));
        circle_E[i] = parseInt(base22(circle_A[i] + circle_B[i] + circle_C[i] + circle_D[i]));
        circle_F[i] = parseInt(base22(circle_A[i] + circle_B[i]));
        circle_G[i] = parseInt(base22(circle_B[i] + circle_C[i]));
        circle_H[i] = parseInt(base22(circle_C[i] + circle_D[i]));
        circle_I[i] = parseInt(base22(circle_A[i] + circle_D[i]));

        // Выполняем расчеты оставшейся энергии (маленькие кружки)
        circle_AE[i] = parseInt(base22(circle_A[i] + circle_E[i]));
        circle_BE[i] = parseInt(base22(circle_B[i] + circle_E[i]));
        circle_CE[i] = parseInt(base22(circle_C[i] + circle_E[i]));
        circle_DE[i] = parseInt(base22(circle_D[i] + circle_E[i]));
        circle_FE[i] = parseInt(base22(circle_F[i] + circle_E[i]));
        circle_GE[i] = parseInt(base22(circle_G[i] + circle_E[i]));
        circle_HE[i] = parseInt(base22(circle_H[i] + circle_E[i]));
        circle_IE[i] = parseInt(base22(circle_I[i] + circle_E[i]));

        circle_AE_inner[i] = parseInt(base22(circle_A[i] + circle_AE[i]));
        circle_BE_inner[i] = parseInt(base22(circle_B[i] + circle_BE[i]));
        circle_CE_inner[i] = parseInt(base22(circle_C[i] + circle_CE[i]));
        circle_DE_inner[i] = parseInt(base22(circle_D[i] + circle_DE[i]));
        circle_FE_inner[i] = parseInt(base22(circle_F[i] + circle_FE[i]));
        circle_GE_inner[i] = parseInt(base22(circle_G[i] + circle_GE[i]));
        circle_HE_inner[i] = parseInt(base22(circle_H[i] + circle_HE[i]));
        circle_IE_inner[i] = parseInt(base22(circle_I[i] + circle_IE[i]));

        circle_M[i] = parseInt(base22(circle_CE[i] + circle_DE[i]));
        circle_O[i] = parseInt(base22(circle_CE[i] + circle_M[i]));
        circle_N[i] = parseInt(base22(circle_DE[i] + circle_M[i]));
        circle_P[i] = parseInt(base22(circle_AE[i] + circle_E[i]));
        circle_R[i] = parseInt(base22(circle_BE[i] + circle_E[i]));

        circle_5[i] = parseInt(base22(circle_A[i] + circle_F[i]));
        circle_3[i] = parseInt(base22(circle_A[i] + circle_5[i]));
        circle_7[i] = parseInt(base22(circle_5[i] + circle_F[i]));
        circle_2[i] = parseInt(base22(circle_A[i] + circle_3[i]));
        circle_4[i] = parseInt(base22(circle_3[i] + circle_5[i]));
        circle_6[i] = parseInt(base22(circle_5[i] + circle_7[i]));
        circle_8[i] = parseInt(base22(circle_7[i] + circle_F[i]));

        circle_15[i] = parseInt(base22(circle_F[i] + circle_B[i]));
        circle_13[i] = parseInt(base22(circle_F[i] + circle_15[i]));
        circle_17[i] = parseInt(base22(circle_15[i] + circle_B[i]));
        circle_12[i] = parseInt(base22(circle_F[i] + circle_13[i]));
        circle_14[i] = parseInt(base22(circle_13[i] + circle_15[i]));
        circle_16[i] = parseInt(base22(circle_15[i] + circle_17[i]));
        circle_18[i] = parseInt(base22(circle_17[i] + circle_B[i]));

        circle_25[i] = parseInt(base22(circle_B[i] + circle_G[i]));
        circle_23[i] = parseInt(base22(circle_B[i] + circle_25[i]));
        circle_27[i] = parseInt(base22(circle_25[i] + circle_G[i]));
        circle_22[i] = parseInt(base22(circle_B[i] + circle_23[i]));
        circle_24[i] = parseInt(base22(circle_23[i] + circle_25[i]));
        circle_26[i] = parseInt(base22(circle_25[i] + circle_27[i]));
        circle_28[i] = parseInt(base22(circle_27[i] + circle_G[i]));

        circle_35[i] = parseInt(base22(circle_G[i] + circle_C[i]));
        circle_33[i] = parseInt(base22(circle_G[i] + circle_35[i]));
        circle_37[i] = parseInt(base22(circle_35[i] + circle_C[i]));
        circle_32[i] = parseInt(base22(circle_G[i] + circle_33[i]));
        circle_34[i] = parseInt(base22(circle_33[i] + circle_35[i]));
        circle_36[i] = parseInt(base22(circle_35[i] + circle_37[i]));
        circle_38[i] = parseInt(base22(circle_37[i] + circle_C[i]));

        circle_45[i] = parseInt(base22(circle_C[i] + circle_H[i]));
        circle_43[i] = parseInt(base22(circle_C[i] + circle_45[i]));
        circle_47[i] = parseInt(base22(circle_45[i] + circle_H[i]));
        circle_42[i] = parseInt(base22(circle_C[i] + circle_43[i]));
        circle_44[i] = parseInt(base22(circle_43[i] + circle_45[i]));
        circle_46[i] = parseInt(base22(circle_45[i] + circle_47[i]));
        circle_48[i] = parseInt(base22(circle_47[i] + circle_H[i]));

        circle_55[i] = parseInt(base22(circle_H[i] + circle_D[i]));
        circle_53[i] = parseInt(base22(circle_H[i] + circle_55[i]));
        circle_57[i] = parseInt(base22(circle_55[i] + circle_D[i]));
        circle_52[i] = parseInt(base22(circle_H[i] + circle_53[i]));
        circle_54[i] = parseInt(base22(circle_53[i] + circle_55[i]));
        circle_56[i] = parseInt(base22(circle_55[i] + circle_57[i]));
        circle_58[i] = parseInt(base22(circle_57[i] + circle_D[i]));

        circle_65[i] = parseInt(base22(circle_D[i] + circle_I[i]));
        circle_63[i] = parseInt(base22(circle_D[i] + circle_65[i]));
        circle_67[i] = parseInt(base22(circle_65[i] + circle_I[i]));
        circle_62[i] = parseInt(base22(circle_D[i] + circle_63[i]));
        circle_64[i] = parseInt(base22(circle_63[i] + circle_65[i]));
        circle_66[i] = parseInt(base22(circle_65[i] + circle_67[i]));
        circle_68[i] = parseInt(base22(circle_67[i] + circle_I[i]));

        circle_75[i] = parseInt(base22(circle_I[i] + circle_A[i]));
        circle_73[i] = parseInt(base22(circle_I[i] + circle_75[i]));
        circle_77[i] = parseInt(base22(circle_75[i] + circle_A[i]));
        circle_72[i] = parseInt(base22(circle_I[i] + circle_73[i]));
        circle_74[i] = parseInt(base22(circle_73[i] + circle_75[i]));
        circle_76[i] = parseInt(base22(circle_75[i] + circle_77[i]));
        circle_78[i] = parseInt(base22(circle_77[i] + circle_A[i]));

        physics_7[i] = circle_A[i];
        physics_6[i] = circle_AE_inner[i];
        physics_5[i] = circle_AE[i];
        physics_4[i] = circle_P[i];
        physics_3[i] = circle_E[i];
        physics_2[i] = circle_DE[i];
        physics_1[i] = circle_D[i];
        physics_all[i] = parseInt(base22(physics_1[i] + physics_2[i] + physics_3[i] + physics_4[i] + physics_5[i] + physics_6[i] + physics_7[i]));

        energy_7[i] = circle_B[i];
        energy_6[i] = circle_BE_inner[i];
        energy_5[i] = circle_BE[i];
        energy_4[i] = circle_R[i];
        energy_3[i] = circle_E[i];
        energy_2[i] = circle_CE[i];
        energy_1[i] = circle_C[i];
        energy_all[i] = parseInt(base22(energy_1[i] + energy_2[i] + energy_3[i] + energy_4[i] + energy_5[i] + energy_6[i] + energy_7[i]));

        emotion_7[i] = parseInt(base22(physics_7[i] + energy_7[i]));
        emotion_6[i] = parseInt(base22(physics_6[i] + energy_6[i]));
        emotion_5[i] = parseInt(base22(physics_5[i] + energy_5[i]));
        emotion_4[i] = parseInt(base22(physics_4[i] + energy_4[i]));
        emotion_3[i] = parseInt(base22(physics_3[i] + energy_3[i]));
        emotion_2[i] = parseInt(base22(physics_2[i] + energy_2[i]));
        emotion_1[i] = parseInt(base22(physics_1[i] + energy_1[i]));
        emotion_all[i] = parseInt(base22(emotion_1[i] + emotion_2[i] + emotion_3[i] + emotion_4[i] + emotion_5[i] + emotion_6[i] + emotion_7[i]));

        circle_sky[i] = parseInt(base22(circle_B[i] + circle_D[i]));
        circle_earth[i] = parseInt(base22(circle_A[i] + circle_C[i]));
        circle_se_total[i] = parseInt(base22(circle_sky[i] + circle_earth[i]));
        circle_man[i] = parseInt(base22(circle_F[i] + circle_H[i]));
        circle_woman[i] = parseInt(base22(circle_G[i] + circle_I[i]));
        circle_mw_total[i] = parseInt(base22(circle_man[i] + circle_woman[i]));
        circle_spirit[i] = parseInt(base22(circle_se_total[i] + circle_mw_total[i]));
        circle_planet[i] = parseInt(base22(circle_mw_total[i] + circle_spirit[i]));





        // Заполняем результаты в текстовые элементы SVG
        document.getElementById("circle_A_text").textContent = circle_A[i];
        document.getElementById("circle_B_text").textContent = circle_B[i];
        document.getElementById("circle_C_text").textContent = circle_C[i];
        document.getElementById("circle_D_text").textContent = circle_D[i];
        document.getElementById("circle_E_text").textContent = circle_E[i];
        document.getElementById("circle_F_text").textContent = circle_F[i];
        document.getElementById("circle_G_text").textContent = circle_G[i];
        document.getElementById("circle_H_text").textContent = circle_H[i];
        document.getElementById("circle_I_text").textContent = circle_I[i];
        document.getElementById("circle_M_text").textContent = circle_M[i];
        document.getElementById("circle_O_text").textContent = circle_O[i];
        document.getElementById("circle_N_text").textContent = circle_N[i];
        document.getElementById("circle_P_text").textContent = circle_P[i];
        document.getElementById("circle_R_text").textContent = circle_R[i];

        document.getElementById("circle_AE_text").textContent = circle_AE[i];
        document.getElementById("circle_BE_text").textContent = circle_BE[i];
        document.getElementById("circle_CE_text").textContent = circle_CE[i];
        document.getElementById("circle_DE_text").textContent = circle_DE[i];
        document.getElementById("circle_FE_text").textContent = circle_FE[i];
        document.getElementById("circle_GE_text").textContent = circle_GE[i];
        document.getElementById("circle_HE_text").textContent = circle_HE[i];
        document.getElementById("circle_IE_text").textContent = circle_IE[i];

        document.getElementById("circle_AE_inner_text").textContent = circle_AE_inner[i];
        document.getElementById("circle_BE_inner_text").textContent = circle_BE_inner[i];
        document.getElementById("circle_CE_inner_text").textContent = circle_CE_inner[i];
        document.getElementById("circle_DE_inner_text").textContent = circle_DE_inner[i];
        document.getElementById("circle_FE_inner_text").textContent = circle_FE_inner[i];
        document.getElementById("circle_GE_inner_text").textContent = circle_GE_inner[i];
        document.getElementById("circle_HE_inner_text").textContent = circle_HE_inner[i];
        document.getElementById("circle_IE_inner_text").textContent = circle_IE_inner[i];

        document.getElementById("circle_2_text").textContent = circle_2[i];
        document.getElementById("circle_3_text").textContent = circle_3[i];
        document.getElementById("circle_4_text").textContent = circle_4[i];
        document.getElementById("circle_5_text").textContent = circle_5[i];
        document.getElementById("circle_6_text").textContent = circle_6[i];
        document.getElementById("circle_7_text").textContent = circle_7[i];
        document.getElementById("circle_8_text").textContent = circle_8[i];

        document.getElementById("circle_12_text").textContent = circle_12[i];
        document.getElementById("circle_13_text").textContent = circle_13[i];
        document.getElementById("circle_14_text").textContent = circle_14[i];
        document.getElementById("circle_15_text").textContent = circle_15[i];
        document.getElementById("circle_16_text").textContent = circle_16[i];
        document.getElementById("circle_17_text").textContent = circle_17[i];
        document.getElementById("circle_18_text").textContent = circle_18[i];

        document.getElementById("circle_22_text").textContent = circle_22[i];
        document.getElementById("circle_23_text").textContent = circle_23[i];
        document.getElementById("circle_24_text").textContent = circle_24[i];
        document.getElementById("circle_25_text").textContent = circle_25[i];
        document.getElementById("circle_26_text").textContent = circle_26[i];
        document.getElementById("circle_27_text").textContent = circle_27[i];
        document.getElementById("circle_28_text").textContent = circle_28[i];

        document.getElementById("circle_32_text").textContent = circle_32[i];
        document.getElementById("circle_33_text").textContent = circle_33[i];
        document.getElementById("circle_34_text").textContent = circle_34[i];
        document.getElementById("circle_35_text").textContent = circle_35[i];
        document.getElementById("circle_36_text").textContent = circle_36[i];
        document.getElementById("circle_37_text").textContent = circle_37[i];
        document.getElementById("circle_38_text").textContent = circle_38[i];

        document.getElementById("circle_42_text").textContent = circle_42[i];
        document.getElementById("circle_43_text").textContent = circle_43[i];
        document.getElementById("circle_44_text").textContent = circle_44[i];
        document.getElementById("circle_45_text").textContent = circle_45[i];
        document.getElementById("circle_46_text").textContent = circle_46[i];
        document.getElementById("circle_47_text").textContent = circle_47[i];
        document.getElementById("circle_48_text").textContent = circle_48[i];

        document.getElementById("circle_52_text").textContent = circle_52[i];
        document.getElementById("circle_53_text").textContent = circle_53[i];
        document.getElementById("circle_54_text").textContent = circle_54[i];
        document.getElementById("circle_55_text").textContent = circle_55[i];
        document.getElementById("circle_56_text").textContent = circle_56[i];
        document.getElementById("circle_57_text").textContent = circle_57[i];
        document.getElementById("circle_58_text").textContent = circle_58[i];

        document.getElementById("circle_62_text").textContent = circle_62[i];
        document.getElementById("circle_63_text").textContent = circle_63[i];
        document.getElementById("circle_64_text").textContent = circle_64[i];
        document.getElementById("circle_65_text").textContent = circle_65[i];
        document.getElementById("circle_66_text").textContent = circle_66[i];
        document.getElementById("circle_67_text").textContent = circle_67[i];
        document.getElementById("circle_68_text").textContent = circle_68[i];

        document.getElementById("circle_72_text").textContent = circle_72[i];
        document.getElementById("circle_73_text").textContent = circle_73[i];
        document.getElementById("circle_74_text").textContent = circle_74[i];
        document.getElementById("circle_75_text").textContent = circle_75[i];
        document.getElementById("circle_76_text").textContent = circle_76[i];
        document.getElementById("circle_77_text").textContent = circle_77[i];
        document.getElementById("circle_78_text").textContent = circle_78[i];

        document.getElementById("physics_1").textContent = physics_1[i];
        document.getElementById("physics_2").textContent = physics_2[i];
        document.getElementById("physics_3").textContent = physics_3[i];
        document.getElementById("physics_4").textContent = physics_4[i];
        document.getElementById("physics_5").textContent = physics_5[i];
        document.getElementById("physics_6").textContent = physics_6[i];
        document.getElementById("physics_7").textContent = physics_7[i];
        document.getElementById("physics_all").textContent = physics_all[i];

        document.getElementById("energy_1").textContent = energy_1[i];
        document.getElementById("energy_2").textContent = energy_2[i];
        document.getElementById("energy_3").textContent = energy_3[i];
        document.getElementById("energy_4").textContent = energy_4[i];
        document.getElementById("energy_5").textContent = energy_5[i];
        document.getElementById("energy_6").textContent = energy_6[i];
        document.getElementById("energy_7").textContent = energy_7[i];
        document.getElementById("energy_all").textContent = energy_all[i];

        document.getElementById("emotion_1").textContent = emotion_1[i];
        document.getElementById("emotion_2").textContent = emotion_2[i];
        document.getElementById("emotion_3").textContent = emotion_3[i];
        document.getElementById("emotion_4").textContent = emotion_4[i];
        document.getElementById("emotion_5").textContent = emotion_5[i];
        document.getElementById("emotion_6").textContent = emotion_6[i];
        document.getElementById("emotion_7").textContent = emotion_7[i];
        document.getElementById("emotion_all").textContent = emotion_all[i];


        document.getElementById("circle_sky_text").textContent = circle_sky[i];
        document.getElementById("circle_earth_text").textContent = circle_earth[i];
        document.getElementById("circle_se_total_text").textContent = circle_se_total[i];
        document.getElementById("circle_man_text").textContent = circle_man[i];
        document.getElementById("circle_woman_text").textContent = circle_woman[i];
        document.getElementById("circle_mw_total_text").textContent = circle_mw_total[i];
        document.getElementById("circle_spirit_text").textContent = circle_spirit[i];
        document.getElementById("circle_planet_text").textContent = circle_planet[i];
    
    }
}


// Функция для суммирования значений до 22
function sum22(value) {
    if (value <= 22) {
        return value;
    }

    let result = 0;
    for (let i = 0; i < value.length; i++) {
        result += (value.charCodeAt(i) - 48);
    }

    return sum22(result.toString());
}

// Пример функции для базового суммирования до 22
function base22(value) {
    while (value > 22) {
        value = sum22(value.toString());
    }
    return value;
}
