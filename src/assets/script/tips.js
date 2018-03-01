import layerTips from '../../components/layerTips';

export default {
    confirm(opts){
        layerTips.config = Object.assign(layerTips.config, opts, {
            type: 'confirm',
            isShow: true
        });
    },

    notice(opts){
        layerTips.config = Object.assign(layerTips.config, opts, {
            type: 'notice',
            isShow: true
        });
    },

    alert(opts, fn){
        if (typeof opts === 'string') {
            layerTips.config = Object.assign(layerTips.config, {
                type: 'alert',
                isShow: true,
                content: opts,
                confirmCallback: function () {
                    fn && fn();
                }
            });
        } else {
            layerTips.config = Object.assign(layerTips.config, opts, {
                type: 'alert',
                isShow: true
            });
        }
    }
}
