import layerTips from '../../components/layerTips';
import toast from '../../components/toast';

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
    },
    toast(opts){
        if(typeof opts == 'string'){
            toast.config = Object.assign(toast.config, {
                message: opts,
                isShow: true
            });
        } else {
            toast.config = Object.assign(toast.config, opts, {isShow: true});
        }
    }
}
