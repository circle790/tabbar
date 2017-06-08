import layerTips from '../../components/layerTips';
import toast from '../../components/toast';

export default {
    confirm(opts){
        layerTips.config = Object.assign(opts, {
            type: 'confirm',
            isShow: true
        });
    },

    notice(opts){
        layerTips.config = Object.assign(opts, {
            type: 'notice',
            isShow: true
        });
    },

    alert(opts, fn){
        if (typeof opts === 'string') {
            layerTips.config = {
                type: 'alert',
                isShow: true,
                content: opts,
                confirmCallback: function () {
                    fn && fn();
                }
            };
        } else {
            layerTips.config = Object.assign(opts, {
                type: 'alert',
                isShow: true
            });
        }
    },
    toast(opts){
        if(typeof opts == 'string'){
            toast.toastConfig = Object.assign(toast.toastConfig, {
                message: opts,
                isShow: true
            });
        } else {
            toast.toastConfig = Object.assign(toast.toastConfig, {
                message: opts.message,
                iconClass: opts.iconClass,
                customClass: opts.customClass,
                duration: opts.duration,
                over: opts.over,
                isShow: true
            });
        }
    }
}
