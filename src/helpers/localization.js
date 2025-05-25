import localizationData from '../lang/pt-br.json';

const localizationStrings = localizationData.localization;

export const getLocalizedString = (localizationKey) => {
	const keys = localizationKey.split('.');
	let localized = localizationStrings;

	for (const key of keys) {
		if (localized && key in localized) {
			localized = localized[key];
		} else {
			console.error(`Localization key "${localizationKey}" not found.`);
			return "N/A";
		}
	}

	return localized;
};
