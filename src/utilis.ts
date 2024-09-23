
const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  }; 

const capitalize = (tag:string) : string  => {
  return tag.charAt(0).toUpperCase() + tag.slice(1,tag.length)
}


  export {
    formatDate,
    capitalize,
  }