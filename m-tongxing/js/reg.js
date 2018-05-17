$(function(){    
    var validator = $('#regForm').validate({
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        errorElement: "em",
        success: 'valid',
        rules: {
            inviter_phone: {
                phone: true,
                remote: {
                    url: 'check.php',  //check.php 请求邀请人手机是否存在,返回true与false
                    type: "get",
                    dataType: 'json',
                    data: {
                        inviter_phone: function () {
                            return $("#inviter_phone").val();
                        }
                    }
                }
            },
            userphone: {
                required: true,
                phone: true,
                remote: {
                    url: 'check.php',  //check.php 请求手机号是否被注册,返回true与false
                    type: "get",
                    dataType: 'json',
                    data: {
                        userphone: function () {
                            return $("#userphone").val();
                        }
                    }
                }
            },           
            password: {
                required: true
            },
            comfirm_password: {
                required: true,
                equalTo: "#password"
            },
            code:{
                required: true
            },
            phonecode:{
                required: true
            },
            agree:{
                required: true
            }
        },
        messages: {
            inviter_phone: {
                phone: '请正确输入邀请人手机号',
                remote: '邀请人手机号不存在'
            },
            userphone: {
                required: '请输入手机号',
                phone: '请正确输入手机号',
                remote: '手机号已存在'
            },            
            password: {
                required: '请输入密码'
            },
            comfirm_password: {
                required: '请输入确认密码',
                equalTo: '两次密码不一样'
            },
            code:{
                required: '请输入图形验证码'
            },
            phonecode:{
                required: '请输入验证码'
            },
            agree:{
                required: '请同意《用户注册服务协议》'
            }
        },
        submitHandler: function (form) {
            console.log(form);        
            $('#reg-btn').addClass('btn-gray').attr('disabled', 'disabled');
            $(form).ajaxSubmit({
                url: "",
                typ: "post",
                dataType: 'json',
                success: function (results) {
                    if (results.status == 200) {
                        layer.msg('提交成功', function () {
                            window.location = "跳转的url";  //请程序自行修改
                        });
                    } else {
                        $('#reg-btn').removeClass('btn-gray').removeAttr('disabled');
                        layer.msg(result.message);
                    }

                }
            });
            return false;
        }
    });


    //倒计时
    var time = 59;
    $('#getSmsCode').click(function () {
        var userphone = $('#userphone').val(),
            $btn = $(this);
        if (!$('#userphone').hasClass('valid')) {
            layer.msg('请正确输入手机号');
            return;
        }
        $btn.attr('disabled', 'disabled').val("发送中...").attr('data-status', 1);
        $.ajax({
            type: "get",
            url: "http://www.baidu.com",
            data: {'userphone': userphone},
            dataType: 'json',
            success: function (data) {
                if (data.code == '200') {
                    layer.msg('发送成功', function () {
                        var timer = setInterval(function () {
                            time--;
                            if (time < 0) {
                                $btn.removeClass('btn-gray').removeAttr('disabled').val("重新获取");
                                clearInterval(timer);
                                $btn.attr('data-status', 0);
                            } else {
                                $btn.val("重新获取(" + time + ")");
                            }
                        }, 1000);
                    });
                } else {
                    $('#reg-btn').removeAttr('disabled');
                    $btn.attr('data-status', 0);
                    layer.msg(data.data);
                }
            }
        });
    })
})