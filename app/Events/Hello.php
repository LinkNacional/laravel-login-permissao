<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Access_log;

class Hello implements ShouldBroadcast {
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    private $id;

    public function __construct($id) {
        $this->id = $id;
    }

    public function broadcastWith() {
        $log = Access_log::where('user_id',$this->id)->orderByDesc('hour_access')->get();
        $return = [];
        foreach ($log as $value) {
            $return[] = [
                'data' => $value->hour_access,
                'ip' => $value->ip,
                'status' => $value->status,
            ];
        };
        return $return;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn() {
        return new Channel('channel');
    }
}
