import math
import random
import wolframalpha
from matplotlib import pyplot as plt
import base64
import os

def exocytosis(diracDeltat, D, x):
    standard_deviation = math.sqrt(2*(float(D)*float(diracDeltat))) #standard deviation
    print("Your Standard Deviation is: " + " " + str(standard_deviation))
    u = 0;  # mean
    apiInput = "compute gaussian distribution" + " " + "mean = " + " " + str(u) + " " + "standard deviation = " \
               + " " + str(standard_deviation) + " " + "x=" + " " + str(x)
    # App id
    app_id = 'G92789-EG67WRE55Q'
    # Instance of wolfram alpha
    # client class
    client = wolframalpha.Client(app_id)
    # Stores the response from
    # wolfram alpha
    res = client.query(apiInput)
    # Includes only text from the response
    answer = next(res.results).text
    print("Your Gaussian Distribution is:" + " " + answer)
    print("===============================================")
    print("The probability (Pb) that a transmitter molecule, after hitting the receptor surface, will "
          "bind in a given time step (δt) is related to the macroscopic rate constant:")
    print("values are-> ")
    SigmaR = 50
    print("SigmaR/Density of the receptor molecule at the postsynaptic membrane, default: 50 μg ")
    N = float(6.0222*math.pow(10, 23))
    print("N - Avogadro’s number,  default:" + " " + str(N))
    K = random.randrange(5, 10) #rate constant of binding
    print("K - Rate Constant of Binding, default in microMoles per second:" + " " + str(K))
    print("diractDeltaT - time step - already defined -" + " " + str(diracDeltat))
    print("D - Diffusion Coefficient - already defined -" + " " + str(D))
    macroscopicRateConstant = ((50*float(K))/N)*math.sqrt((math.pi*float(diracDeltat))/float(D))
    print("The probability your neurotransmitter binds to a receptor is: " + str(macroscopicRateConstant))

    print("============================================")
    print("Vesicular and cleft glutamate concentrations")

    if True:
        # x-axis time
        x = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]

        # corresponding y-axis values values with # of glutamate molecules
        y = [256, 864, 2048, 4000, "unknown", 6912]
        # plotting the points
        plt.plot(x, y)
        plt.plot(x, y, marker="o", markersize=20, markeredgecolor="red", markerfacecolor="green")

        # naming the x-axis
        plt.xlabel('Time(msec)')
        # naming the y-axis
        plt.ylabel('Vesicular Concentration(mM)')

        # giving a title to my graph
        plt.title('Vesicular and cleft glutamate concentration')

        # function to show the plot
        plt.show()

        #Glavinović, M. I. (1999). Monte Carlo simulation of vesicular release, spatiotemporal distribution of
        # glutamate in synaptic cleft and generation of postsynaptic currents.Pflugers Archiv European Journal of
        # Physiology, 437(3), 462–470. https://doi.org/10.1007/s004240050802

        return answer, macroscopicRateConstant

if __name__ == '__main__':
    print("Compute The distance traveled by a neurotransmitter molecule")
    print("Enter Gaussian Distribution variables (x-zscore)(𝜎-standard deviation)(mean = 0): ")
    print("Compute Standard Deviation first to compute Gaussian Distribution")
    diracDeltat = input(
        "Enter timestep as an integer that is represented in microseconds, can be random since diffusion travel "
        "in this instatiation is random - this is for Standard Deviation")  # time step in microseconds
    D = input(
        "Enter D the diffusion coefficient of Neurotransmitter, take for example: glutamate - this is for "
        "Standard Deviation:")  # D is a rand between 760 and 1040
    x = input(
        "Enter zscore =>  how many standard deviations away you are from mean ")  # zscore =>  how many standard
    # deviations away from mean you are
    exocytosis(diracDeltat, D, x)
