# TnC Analyzer

## 1. What is TnC Analyzer?

This Project aims to make Web privacy policies easier and faster to understand. To that end, this browser extension applies two different analysis methods: (1) It retrieves privacy policy analysis results from the crowdsourcing repository ToS;DR or, (2) if no such results are available, performs an automatic analysis based on rule and machine learning classification techniques.

## 2. Source Files

- manifest.json is the manifest file required for every Google Chrome extension
- jQuery.js contains the jQuery JavaScript Library v1.11.0
- background.js manages the different components of the privacy policy analysis
- scraper.js obtains the URL and body text of the current website
- preprocessor.js prepares the machine learning (ML) classification and also attempts a rule and crowdsourcing classification of the current policy
- trainer.js trains the ML classifier
- trainingData.js contains a database of 100 training privacy policies for training the ML classifier
- classifier.js contains the ML classifier
- labeler.js creates the label for the analyzed privacy policy
- popup.js prepares printing of the analysis results to the screen
- popup.html displays a popup window for the analysis results
- about.html displays details of the automatic classification categories and the grading of the policies

## 3. Software requirements

Windows or Linux with Google Chrome

## 4. Installing and Running Privee

Clone this repo at a convenient location, and load the folder as an unpacked extension within Google Chrome (Settings -> Extensions -> Load unpacked extension...). To run This extension go to the website with the privacy policy that you want to analyze and push the P button in the upper right hand corner of Google Chrome. The first ML classifier run takes one minute to analyze training data.
