pipeline {
    agent any                            // agent节点，any告诉jenkins 任何可用的agent都能执行                

    environment {
        Name = 'eric'   
        cacheDir = "stage" //定义缓存的目录名字
            cachePackage = "${cacheDir}/package.json" //定义缓存的package.json
            cacheCommitIDFile = "${cacheDir}/.commitIDCache.txt" //把成功打包的commitID缓存到这里
    			artifactsDir = "${cacheDir}/artifacts" //制品缓存的目录，构建成功的制品我们放这里
    		    resetFlagFile = "${cacheDir}/.resetFile" //回滚标志的文件
            cacheCommitIDMax = 5         //缓存版本的最大值               // 这个是自定义的顶级pipeline全局变量
    }

    options {
        disableConcurrentBuilds()       // 在多分支的流水线中限制并发
    }

    stages {
        stage('pre-build') {           //  自定义步骤 pre-build
            
            when {
                anyOf {               //   多分支才有的判断，一个真就通过过 
                    branch 'dev'
                    branch 'release'
                    branch 'master' 
                }
            }

            agent {                  //    代表阶段运行在一个代理的docker nodejs容器中
                docker {
                    image 'node:14.18.0'  
                    // 想在 docker 容器中运行代码，但是也想使用流水线所定义的相同节点或和工作空间，必须设置这个
                    reuseNode true   
                }       
            }

            steps {
                sh "printenv"
                echo "pre-build"
                echo "test webhook"
            }
        }
      
      
        stage('build-env') {
            
            when {
                anyOf { 
                    branch 'dev'
                    branch 'release'
                    branch 'master' 
                }
            }
          
          	// 如果设置了true 那么我们有任何一个并发步骤失败那就全都都失败，
            // 因为我们是用来做不同分支任务触发时候的构建选择，所以这个不需要
            failFast false        
            
            parallel {

                stage('build-dev') {
                                  
                    when {
                        branch 'dev'
                    }
                  
                    agent {
                        docker {
                            image 'node:14.18.0' 
                            reuseNode true
                        }       
                    }  
                  
                    steps {
                       echo "build-dev"
                    }
                }

                stage('build-release') {

                    when {
                        beforeAgent true
                        branch 'release'
                    }
                  
                    agent {
                        docker {
                            image 'node:14.18.0' 
                            reuseNode true

                        }       
                    }      

                    steps{
                        echo "build-release"
                    }
                }
                stage('build-master') {

                    agent {
                        docker {
                            image 'node:14.18.0' 
                            reuseNode true
                        }       
                    }

                    when {
                        beforeAgent true
                        branch 'master'
                    }

                    steps {
                      echo "build-master"
                    }
                }
            }
        }

        stage("artifacts-manage"){

            steps {
               echo "artifacts"
            }
        }

        stage('deliver') {

            when {
                beforeAgent true
                anyOf { 
                    branch 'dev'
                    branch 'release'
                }
            }

            steps {
                echo "start deliver"
            }
        }  
        
        stage('deploy') {

            when { 
                beforeAgent true
                branch 'master' 
            }

            steps {
                // 这个就是生成一个按钮，我们用来手动发布的
                input message: "Should you deploy?"
                echo "start deloy"
            }

        }       
    }

  	//post 就是流水线的运行结果状态啦，我们慢点会在这里设置邮件通
    post { 
    
        changed{
            echo 'I changed!'
        }

        failure{
            echo 'I failed!'
        }

        success{
            echo 'I success'
        }

        always{
            echo 'I always'
        }
        unstable{
            echo "unstable"
        }
        aborted{
            echo "aborted"
        }
    }

}
