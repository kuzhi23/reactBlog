const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.ststus = 401;
    return;
  }
  return next();
};

export default checkLoggedIn;
