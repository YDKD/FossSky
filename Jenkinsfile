pipeline {
    agent any

    environment {
        CI = 'true'
    }

    options {
        disableConcurrentBuilds()
    }


    stages {
        stage('pre-build') {
            
            when {
                anyOf { 
                    branch 'dev'
                    branch 'release'
                    branch 'master' 
                }
            }

            agent {
                docker {
                    image 'node:10.21.0' 
                    reuseNode true
                }       
            }

            steps {
                sh "printenv"
                echo "pre-build"
            }
        }
        stage('build-Parallel') {
            
            when {
                anyOf { 
                    branch 'dev'
                    branch 'release'
                    branch 'master' 
                }
            }
            failFast false
            
            parallel {

                stage('build-dev') {
                    agent {
                        docker {
                            image 'node:10.21.0' 
                            reuseNode true
                        }       
                    }                    
                    when {
                        beforeAgent true
                        branch 'dev'
                    }
                    steps {
                       echo "build-dev"
                    }
                }

                stage('build-release') {

                    agent {
                        docker {
                            image 'node:10.21.0' 
                            reuseNode true

                        }       
                    }      

                    when {
                        beforeAgent true
                        branch 'release'
                    }

                    steps{
                        echo "build-release"
                    }
                }
                stage('build-master') {

                    agent {
                        docker {
                            image 'node:10.21.0' 
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
                input message: "Should you deploy?"
                echo "start deloy"
            }

          
        }       
    }

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
