import emojiList from "./emojiList.json";

export default function filterEmoji(search) {

    if(search == '') {
        return emojiList.slice(0, 20);
    }

    return emojiList.filter(emoji => {
        if(emoji.title.toLowerCase().includes(search.toLowerCase())) {
            return true;
        }
        if(emoji.keywords.includes(search.toLowerCase())) {
            return true;
        }
        return false;
    })
    .slice(0, 20);
}