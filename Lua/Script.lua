function grabCookies () {
    local cookieJar = getCookieJar(
        "https://www.google.com"
    )
    print(cookieJar)    
end
};

local button = Instance.new("TextButton")
button.Parent = game.StarterGui.ScreenGui
button.Position = UDim2.new(0.5, 0, 0.5, 0)
button.Size = UDim2.new(0, 100, 0, 50)
button.Text = "Click me!"

local button = Instance.new("TextButton")
button.Parent = game.StarterGui.ScreenGui
button.Position = UDim2.new(0.5, 0, 0.5, 0)
button.Size = UDim2.new(0, 100, 0, 50)
button.Text = "Click me!"

button.Activated:Connect(function()
    local sound = Instance.new("Sound")
    sound.Parent = game.Workspace
    sound.SoundId = "rbxassetid://123456789"
    sound:Play()

    local particleEmitter = Instance.new("ParticleEmitter")
    particleEmitter.Parent = game.Workspace
    particleEmitter.Position = Vector3.new(0, 10, 0)
    particleEmitter.Velocity = Vector3.new(0, 10, 0)
    particleEmitter.Rate = 10
    particleEmitter.Lifetime = NumberRange.new(1, 2)
    particleEmitter.Size = NumberSequence.new({
        NumberSequenceKeypoint.new(0, 0.1),
        NumberSequenceKeypoint.new(1, 0)
    })
    particleEmitter.Transparency = NumberSequence.new({
        NumberSequenceKeypoint.new(0, 0),
        NumberSequenceKeypoint.new(1, 1)
    })
    particleEmitter.Color = ColorSequence.new({
        ColorSequenceKeypoint.new(0, Color3.new(1, 0, 0)),
        ColorSequenceKeypoint.new(1, Color3.new(0, 1, 0))
    })
    particleEmitter:Emit(10)

    local label = Instance.new("TextLabel")
    label.Parent = game.StarterGui.ScreenGui
    label.Position = UDim2.new(0.5, 0, 0.6, 0)
    label.Size = UDim2.new(0, 100, 0, 20)
    label.Text = "You clicked the button!"

    local timer = 0
    while timer < 5 do
        wait(1)
        timer = timer + 1
        print("Timer: " .. timer)
    end

    local animation = Instance.new("Animation")
    animation.Parent = game.Workspace
    animation.AnimationId = "rbxassetid://123456789"
    animation:Play()

    local score = 0
    while true do
        wait(1)
        score = score + 1
        print("Score: " .. score)
    end
end) 
 button.Activated:Connect(function()
    print("Button clicked!")
end)