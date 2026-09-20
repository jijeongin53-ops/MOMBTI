// 플루니티 글로벌 서비스를 위한 국가 목록 데이터
export interface Country {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { code: 'KR', name: 'South Korea', nativeName: '대한민국', flag: '🇰🇷' },
  { code: 'US', name: 'United States', nativeName: 'United States', flag: '🇺🇸' },
  { code: 'JP', name: 'Japan', nativeName: '日本', flag: '🇯🇵' },
  { code: 'CN', name: 'China', nativeName: '中国', flag: '🇨🇳' },
  { code: 'TW', name: 'Taiwan', nativeName: '台灣', flag: '🇹🇼' },
  { code: 'HK', name: 'Hong Kong', nativeName: '香港', flag: '🇭🇰' },
  { code: 'SG', name: 'Singapore', nativeName: 'Singapore', flag: '🇸🇬' },
  { code: 'VN', name: 'Vietnam', nativeName: 'Việt Nam', flag: '🇻🇳' },
  { code: 'TH', name: 'Thailand', nativeName: 'ประเทศไทย', flag: '🇹🇭' },
  { code: 'MY', name: 'Malaysia', nativeName: 'Malaysia', flag: '🇲🇾' },
  { code: 'ID', name: 'Indonesia', nativeName: 'Indonesia', flag: '🇮🇩' },
  { code: 'PH', name: 'Philippines', nativeName: 'Philippines', flag: '🇵🇭' },
  { code: 'AU', name: 'Australia', nativeName: 'Australia', flag: '🇦🇺' },
  { code: 'NZ', name: 'New Zealand', nativeName: 'New Zealand', flag: '🇳🇿' },
  { code: 'CA', name: 'Canada', nativeName: 'Canada', flag: '🇨🇦' },
  { code: 'GB', name: 'United Kingdom', nativeName: 'United Kingdom', flag: '🇬🇧' },
  { code: 'FR', name: 'France', nativeName: 'France', flag: '🇫🇷' },
  { code: 'DE', name: 'Germany', nativeName: 'Deutschland', flag: '🇩🇪' },
  { code: 'IT', name: 'Italy', nativeName: 'Italia', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', nativeName: 'España', flag: '🇪🇸' },
  { code: 'CH', name: 'Switzerland', nativeName: 'Schweiz', flag: '🇨🇭' },
  { code: 'NL', name: 'Netherlands', nativeName: 'Nederland', flag: '🇳🇱' },
  { code: 'SE', name: 'Sweden', nativeName: 'Sverige', flag: '🇸🇪' },
  { code: 'OTHER', name: 'Other Countries', nativeName: '기타 국가', flag: '🌐' }
];
