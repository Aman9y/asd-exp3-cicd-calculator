pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checked out by Jenkins SCM step'
            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'calculator.js,index.html,style.css', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build, test and archive succeeded.'
        }
        failure {
            echo 'Pipeline failed - check test output above.'
        }
    }
}
