ls -al ~/.ssh

git config user.name
git config user.email

ssh-keygen -t rsa -C '名称'  -f
> -t  指定秘钥类型，默认是rsa  还有一种是DSA
> -C  生成的sshkey名称，并不非要是邮箱
> -f  指定秘钥文件存储的位置

三回车

cat ~/.ssh/id_rsa.pub  ----公钥
cat ~/.ssh/id_rsa      ----私钥

把公钥放到github上作为个人公钥或者仓库公钥

验证：
ssh -T git@github.com
ssh -T git@gitee.com

