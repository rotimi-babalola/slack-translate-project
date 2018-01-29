const formatParams = params => {
  // clean up this logic
  let language, text;
  if (!(params.length === 1) && params[0].includes('-')) {
    [language, ...text] = params;
    text = text.join(' ');
  } else {
    language = 'en';
    text = params.join(' ');
  }

  return {
    language,
    text,
  };
};

export default formatParams;
