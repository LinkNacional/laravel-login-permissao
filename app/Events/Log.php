<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Log implements ShouldBroadcast {
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct() {
        //
    }

    public function broadcastWith() {
        $log = Access_log::where('user_id',$id)->orderByDesc('hour_access')->get();
        $return = [];
        foreach ($log as $key => $value) {
            $return[] = [
                'data' => $value->hour_access,
                'ip' => $value->ip,
                'status' => $value->status,
            ];
        };
        return $return;
        // return [
        //     'Hello' => 'there'
        // ];
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
