#!/bin/bash

validation_response=$(curl -s -H "Content-Type: application/json" -X POST https://atomist.atomist.services/project-operation/validate-template -d '{ "owner": "atomist-project-templates", "repo": "blank-template" }')

if [[ $validation_response == *'"errors" : [ ]'* ]]
then
	if [[ $validation_response == *'"warnings" : [ ]'* ]]
	then
		echo "Template passed validation with the following:";
		echo $validation_response;
	else
		echo "Template failed validation with the following warnings:";
		echo $validation_response
		exit -1
	fi
else
	echo "Template failed validation with the following errors:";
	echo $validation_response
	exit -1
fi

