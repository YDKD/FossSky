#!/bin/bash
# set -x
#如果是回滚的操作，我们不⽤再把构建上传⼀次啦，服务器已经有啦
if [! -d ${resetFlagFile}]
then
 # 将本次构建的压缩包上传到资源服务器的指定⽬录
 scp ${artifactsDir}/${GIT_COMMIT}_dist.tar.gz
${sshHostName}:/data/Foss-Sky/${BRANCH_NAME}/ || exit 1
fi
# 远程执⾏服务器上⾯的脚本解压缩发布
ssh ${sshHostName} /data/Foss-Sky/deploy.sh ${BRANCH_NAME} ${GIT_COMMIT} || exit 1
# set +x
