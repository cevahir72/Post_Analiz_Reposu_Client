export function getEnglishMonth(month) {
    let englishMonth;
  
    switch (month) {
      case 'Ocak':
        englishMonth = 'January';
        break;
      case 'Şubat':
        englishMonth = 'February';
        break;
      case 'Mart':
        englishMonth = 'March';
        break;
      case 'Nisan':
        englishMonth = 'April';
        break;
      case 'Mayıs':
        englishMonth = 'May';
        break;
      case 'Haziran':
        englishMonth = 'June';
        break;
      case 'Temmuz':
        englishMonth = 'July';
        break;
      case 'Ağustos':
        englishMonth = 'August';
        break;
      case 'Eylül':
        englishMonth = 'September';
        break;
      case 'Ekim':
        englishMonth = 'October';
        break;
      case 'Kasım':
        englishMonth = 'November';
        break;
      case 'Aralık':
        englishMonth = 'December';
        break;
      default:
        englishMonth = 'Invalid month';
    }
  
    return englishMonth;
  }