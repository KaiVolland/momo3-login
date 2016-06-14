Ext.define('MoMo.login.store.CountryStore', {
    extend: 'Ext.data.Store',

    /**
     *
     */
    fields: ["val", "name"],

    /**
     *
     */
    alias: 'store.countrystore',

    /**
     *
     */
    data: [
        {"val": "AF", "name": "Afghanistan"},
        {"val": "AX", "name": "Åland Islands"},
        {"val": "AL", "name": "Albania"},
        {"val": "DZ", "name": "Algeria"},
        {"val": "AS", "name": "American Samoa"},
        {"val": "AD", "name": "Andorra"},
        {"val": "AO", "name": "Angola"},
        {"val": "AI", "name": "Anguilla"},
        {"val": "AQ", "name": "Antarctica"},
        {"val": "AG", "name": "Antigua and Barbuda"},
        {"val": "AR", "name": "Argentina"},
        {"val": "AM", "name": "Armenia"},
        {"val": "AW", "name": "Aruba"},
        {"val": "AU", "name": "Australia"},
        {"val": "AT", "name": "Austria"},
        {"val": "AZ", "name": "Azerbaijan"},
        {"val": "BS", "name": "Bahamas"},
        {"val": "BH", "name": "Bahrain"},
        {"val": "BD", "name": "Bangladesh"},
        {"val": "BB", "name": "Barbados"},
        {"val": "BY", "name": "Belarus"},
        {"val": "BE", "name": "Belgium"},
        {"val": "BZ", "name": "Belize"},
        {"val": "BJ", "name": "Benin"},
        {"val": "BM", "name": "Bermuda"},
        {"val": "BT", "name": "Bhutan"},
        {"val": "BO", "name": "Bolivia"},
        {"val": "BA", "name": "Bosnia and Herzegovina"},
        {"val": "BW", "name": "Botswana"},
        {"val": "BV", "name": "Bouvet Island"},
        {"val": "BR", "name": "Brazil"},
        {"val": "IO", "name": "British Indian Ocean Territory"},
        {"val": "BN", "name": "Brunei Darussalam"},
        {"val": "BG", "name": "Bulgaria"},
        {"val": "BF", "name": "Burkina Faso"},
        {"val": "BI", "name": "Burundi"},
        {"val": "KH", "name": "Cambodia"},
        {"val": "CM", "name": "Cameroon"},
        {"val": "CA", "name": "Canada"},
        {"val": "CV", "name": "Cape Verde"},
        {"val": "KY", "name": "Cayman Islands"},
        {"val": "CF", "name": "Central African Republic"},
        {"val": "TD", "name": "Chad"},
        {"val": "CL", "name": "Chile"},
        {"val": "CN", "name": "China"},
        {"val": "CX", "name": "Christmas Island"},
        {"val": "CC", "name": "Cocos (Keeling) Islands"},
        {"val": "CO", "name": "Colombia"},
        {"val": "KM", "name": "Comoros"},
        {"val": "CG", "name": "Congo"},
        {"val": "CD", "name": "Congo, The Democratic Republic of The"},
        {"val": "CK", "name": "Cook Islands"},
        {"val": "CR", "name": "Costa Rica"},
        {"val": "CI", "name": "Cote D'ivoire"},
        {"val": "HR", "name": "Croatia"},
        {"val": "CU", "name": "Cuba"},
        {"val": "CY", "name": "Cyprus"},
        {"val": "CZ", "name": "Czech Republic"},
        {"val": "DK", "name": "Denmark"},
        {"val": "DJ", "name": "Djibouti"},
        {"val": "DM", "name": "Dominica"},
        {"val": "DO", "name": "Dominican Republic"},
        {"val": "EC", "name": "Ecuador"},
        {"val": "EG", "name": "Egypt"},
        {"val": "SV", "name": "El Salvador"},
        {"val": "GQ", "name": "Equatorial Guinea"},
        {"val": "ER", "name": "Eritrea"},
        {"val": "EE", "name": "Estonia"},
        {"val": "ET", "name": "Ethiopia"},
        {"val": "FK", "name": "Falkland Islands (Malvinas)"},
        {"val": "FO", "name": "Faroe Islands"},
        {"val": "FJ", "name": "Fiji"},
        {"val": "FI", "name": "Finland"},
        {"val": "FR", "name": "France"},
        {"val": "GF", "name": "French Guiana"},
        {"val": "PF", "name": "French Polynesia"},
        {"val": "TF", "name": "French Southern Territories"},
        {"val": "GA", "name": "Gabon"},
        {"val": "GM", "name": "Gambia"},
        {"val": "GE", "name": "Georgia"},
        {"val": "DE", "name": "Germany"},
        {"val": "GH", "name": "Ghana"},
        {"val": "GI", "name": "Gibraltar"},
        {"val": "GR", "name": "Greece"},
        {"val": "GL", "name": "Greenland"},
        {"val": "GD", "name": "Grenada"},
        {"val": "GP", "name": "Guadeloupe"},
        {"val": "GU", "name": "Guam"},
        {"val": "GT", "name": "Guatemala"},
        {"val": "GG", "name": "Guernsey"},
        {"val": "GN", "name": "Guinea"},
        {"val": "GW", "name": "Guinea-bissau"},
        {"val": "GY", "name": "Guyana"},
        {"val": "HT", "name": "Haiti"},
        {"val": "HM", "name": "Heard Island and Mcdonald Islands"},
        {"val": "VA", "name": "Holy See (Vatican City State)"},
        {"val": "HN", "name": "Honduras"},
        {"val": "HK", "name": "Hong Kong"},
        {"val": "HU", "name": "Hungary"},
        {"val": "IS", "name": "Iceland"},
        {"val": "IN", "name": "India"},
        {"val": "ID", "name": "Indonesia"},
        {"val": "IR", "name": "Iran, Islamic Republic of"},
        {"val": "IQ", "name": "Iraq"},
        {"val": "IE", "name": "Ireland"},
        {"val": "IM", "name": "Isle of Man"},
        {"val": "IL", "name": "Israel"},
        {"val": "IT", "name": "Italy"},
        {"val": "JM", "name": "Jamaica"},
        {"val": "JP", "name": "Japan"},
        {"val": "JE", "name": "Jersey"},
        {"val": "JO", "name": "Jordan"},
        {"val": "KZ", "name": "Kazakhstan"},
        {"val": "KE", "name": "Kenya"},
        {"val": "KI", "name": "Kiribati"},
        {"val": "KP", "name": "Korea, Democratic People's Republic of"},
        {"val": "KR", "name": "Korea, Republic of"},
        {"val": "KW", "name": "Kuwait"},
        {"val": "KG", "name": "Kyrgyzstan"},
        {"val": "LA", "name": "Lao People's Democratic Republic"},
        {"val": "LV", "name": "Latvia"},
        {"val": "LB", "name": "Lebanon"},
        {"val": "LS", "name": "Lesotho"},
        {"val": "LR", "name": "Liberia"},
        {"val": "LY", "name": "Libyan Arab Jamahiriya"},
        {"val": "LI", "name": "Liechtenstein"},
        {"val": "LT", "name": "Lithuania"},
        {"val": "LU", "name": "Luxembourg"},
        {"val": "MO", "name": "Macao"},
        {"val": "MK", "name": "Macedonia, The Former Yugoslav Republic of"},
        {"val": "MG", "name": "Madagascar"},
        {"val": "MW", "name": "Malawi"},
        {"val": "MY", "name": "Malaysia"},
        {"val": "MV", "name": "Maldives"},
        {"val": "ML", "name": "Mali"},
        {"val": "MT", "name": "Malta"},
        {"val": "MH", "name": "Marshall Islands"},
        {"val": "MQ", "name": "Martinique"},
        {"val": "MR", "name": "Mauritania"},
        {"val": "MU", "name": "Mauritius"},
        {"val": "YT", "name": "Mayotte"},
        {"val": "MX", "name": "Mexico"},
        {"val": "FM", "name": "Micronesia, Federated States of"},
        {"val": "MD", "name": "Moldova, Republic of"},
        {"val": "MC", "name": "Monaco"},
        {"val": "MN", "name": "Mongolia"},
        {"val": "ME", "name": "Montenegro"},
        {"val": "MS", "name": "Montserrat"},
        {"val": "MA", "name": "Morocco"},
        {"val": "MZ", "name": "Mozambique"},
        {"val": "MM", "name": "Myanmar"},
        {"val": "NA", "name": "Namibia"},
        {"val": "NR", "name": "Nauru"},
        {"val": "NP", "name": "Nepal"},
        {"val": "NL", "name": "Netherlands"},
        {"val": "AN", "name": "Netherlands Antilles"},
        {"val": "NC", "name": "New Caledonia"},
        {"val": "NZ", "name": "New Zealand"},
        {"val": "NI", "name": "Nicaragua"},
        {"val": "NE", "name": "Niger"},
        {"val": "NG", "name": "Nigeria"},
        {"val": "NU", "name": "Niue"},
        {"val": "NF", "name": "Norfolk Island"},
        {"val": "MP", "name": "Northern Mariana Islands"},
        {"val": "NO", "name": "Norway"},
        {"val": "OM", "name": "Oman"},
        {"val": "PK", "name": "Pakistan"},
        {"val": "PW", "name": "Palau"},
        {"val": "PS", "name": "Palestinian Territory, Occupied"},
        {"val": "PA", "name": "Panama"},
        {"val": "PG", "name": "Papua New Guinea"},
        {"val": "PY", "name": "Paraguay"},
        {"val": "PE", "name": "Peru"},
        {"val": "PH", "name": "Philippines"},
        {"val": "PN", "name": "Pitcairn"},
        {"val": "PL", "name": "Poland"},
        {"val": "PT", "name": "Portugal"},
        {"val": "PR", "name": "Puerto Rico"},
        {"val": "QA", "name": "Qatar"},
        {"val": "RE", "name": "Reunion"},
        {"val": "RO", "name": "Romania"},
        {"val": "RU", "name": "Russian Federation"},
        {"val": "RW", "name": "Rwanda"},
        {"val": "SH", "name": "Saint Helena"},
        {"val": "KN", "name": "Saint Kitts and Nevis"},
        {"val": "LC", "name": "Saint Lucia"},
        {"val": "PM", "name": "Saint Pierre and Miquelon"},
        {"val": "VC", "name": "Saint Vincent and The Grenadines"},
        {"val": "WS", "name": "Samoa"},
        {"val": "SM", "name": "San Marino"},
        {"val": "ST", "name": "Sao Tome and Principe"},
        {"val": "SA", "name": "Saudi Arabia"},
        {"val": "SN", "name": "Senegal"},
        {"val": "RS", "name": "Serbia"},
        {"val": "SC", "name": "Seychelles"},
        {"val": "SL", "name": "Sierra Leone"},
        {"val": "SG", "name": "Singapore"},
        {"val": "SK", "name": "Slovakia"},
        {"val": "SI", "name": "Slovenia"},
        {"val": "SB", "name": "Solomon Islands"},
        {"val": "SO", "name": "Somalia"},
        {"val": "ZA", "name": "South Africa"},
        {"val": "GS", "name": "South Georgia and The South Sandwich Islands"},
        {"val": "ES", "name": "Spain"},
        {"val": "LK", "name": "Sri Lanka"},
        {"val": "SD", "name": "Sudan"},
        {"val": "SR", "name": "Suriname"},
        {"val": "SJ", "name": "Svalbard and Jan Mayen"},
        {"val": "SZ", "name": "Swaziland"},
        {"val": "SE", "name": "Sweden"},
        {"val": "CH", "name": "Switzerland"},
        {"val": "SY", "name": "Syrian Arab Republic"},
        {"val": "TW", "name": "Taiwan, Province of China"},
        {"val": "TJ", "name": "Tajikistan"},
        {"val": "TZ", "name": "Tanzania, United Republic of"},
        {"val": "TH", "name": "Thailand"},
        {"val": "TL", "name": "Timor-leste"},
        {"val": "TG", "name": "Togo"},
        {"val": "TK", "name": "Tokelau"},
        {"val": "TO", "name": "Tonga"},
        {"val": "TT", "name": "Trinidad and Tobago"},
        {"val": "TN", "name": "Tunisia"},
        {"val": "TR", "name": "Turkey"},
        {"val": "TM", "name": "Turkmenistan"},
        {"val": "TC", "name": "Turks and Caicos Islands"},
        {"val": "TV", "name": "Tuvalu"},
        {"val": "UG", "name": "Uganda"},
        {"val": "UA", "name": "Ukraine"},
        {"val": "AE", "name": "United Arab Emirates"},
        {"val": "GB", "name": "United Kingdom"},
        {"val": "US", "name": "United States"},
        {"val": "UM", "name": "United States Minor Outlying Islands"},
        {"val": "UY", "name": "Uruguay"},
        {"val": "UZ", "name": "Uzbekistan"},
        {"val": "VU", "name": "Vanuatu"},
        {"val": "VE", "name": "Venezuela"},
        {"val": "VN", "name": "Vietnam"},
        {"val": "VG", "name": "Virgin Islands, British"},
        {"val": "VI", "name": "Virgin Islands, U.S."},
        {"val": "WF", "name": "Wallis and Futuna"},
        {"val": "EH", "name": "Western Sahara"},
        {"val": "YE", "name": "Yemen"},
        {"val": "ZM", "name": "Zambia"},
        {"val": "ZW", "name": "Zimbabwe"}
    ]
});
