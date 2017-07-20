let globalActionCreators = {};

const registerGlobalActionCreators = mapDispatchToProps =>
  (globalActionCreators = { ...globalActionCreators, ...mapDispatchToProps });

const buildDispatchToPropsMap = (actionCreators = {}) => dispatch => ({
  actions: bindActionCreators(
    { ...globalActionCreators, ...actionCreators },
    dispatch
  )
});

const buildStateToPropsMap = filter => state =>
  filter ? filter.apply(state) : state;

export {
  registerGlobalActionCreators,
  buildDispatchToPropsMap,
  buildStateToPropsMap
};
